<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Incluir archivos de PHPMailer (ubicados en public/PHPMailer al hacer build)
require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
    if (!$data) {
        $data = $_POST;
    }

    // Validación de Google reCAPTCHA
    // DEBES CAMBIAR ESTO POR TU CLAVE SECRETA DE RECAPTCHA (Secret Key)
    $recaptchaSecret = 'TU_CLAVE_SECRETA_AQUI';
    $recaptchaResponse = $data['g-recaptcha-response'] ?? '';

    if (empty($recaptchaResponse)) {
        echo json_encode(['success' => false, 'message' => 'Por favor, completa el CAPTCHA.']);
        exit;
    }

    $verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret=' . $recaptchaSecret . '&response=' . $recaptchaResponse);
    $responseData = json_decode($verifyResponse);

    // Si necesitas ignorar el captcha localmente puedes comentar esto:
    if (!$responseData->success) {
        echo json_encode(['success' => false, 'message' => 'Validación de CAPTCHA fallida.']);
        exit;
    }

    $name = htmlspecialchars($data['name'] ?? '');
    $lastName = htmlspecialchars($data['last_name'] ?? '');
    $email = htmlspecialchars($data['email'] ?? '');
    $phone = htmlspecialchars($data['phone'] ?? '');
    $ambientes = htmlspecialchars($data['ambientes'] ?? '');
    $remax = htmlspecialchars($data['agente_remax'] ?? 'No');
    $message = htmlspecialchars($data['message'] ?? '');

    $mail = new PHPMailer(true);

    try {
        // Configuración SMTP de Ferozo
        $mail->isSMTP();
        $mail->Host = 'info@studionoir.com.ar';
        $mail->SMTPAuth = true;
        // IMPORTANTE: Completa el usuario y la contraseña (la contraseña de esa cuenta)
        $mail->Username = 'info@studionoir.com.ar';
        $mail->Password = 'NUj6@QaT'; // REEMPLAZAR
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // SSL/TLS en 465
        $mail->Port = 465;
        $mail->CharSet = 'UTF-8';

        // Remitente y destinatario
        // El remitente debe ser siempre la cuenta autenticada para evitar que Ferozo lo marque como SPAM o dé error
        $mail->setFrom('info@studionoir.com.ar', "Web Studio Noir");
        $mail->addAddress('info@studionoir.com.ar');

        // Responder al visitante
        if ($email) {
            $mail->addReplyTo($email, "$name $lastName");
        }

        // Contenido
        $mail->isHTML(true);
        $mail->Subject = 'Nuevo mensaje desde la web de Studio Noir';
        $mail->Body = "
            <h2>Nuevo mensaje de contacto</h2>
            <p><strong>Nombre:</strong> {$name} {$lastName}</p>
            <p><strong>Email:</strong> {$email}</p>
            <p><strong>Teléfono:</strong> {$phone}</p>
            <p><strong>Agente REMAX:</strong> {$remax}</p>
            <p><strong>Ambientes:</strong> {$ambientes}</p>
            <p><strong>Mensaje:</strong><br/>" . nl2br($message) . "</p>
        ";

        $mail->send();
        echo json_encode(['success' => true, 'message' => 'Mensaje enviado.']);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Error al enviar el correo: ' . $mail->ErrorInfo]);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Método no permitido.']);
}
