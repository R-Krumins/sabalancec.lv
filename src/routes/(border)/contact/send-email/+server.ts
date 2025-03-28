import type { RequestHandler } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import nodemailer from 'nodemailer';

export const POST: RequestHandler = async ({ request }) => {
	const contentType = request.headers.get('content-type');
	if (!contentType?.includes('application/json')) {
		throw error(415, 'Content-Type must be application/json');
	}

	let body;
	try {
		body = await request.json();
	} catch {
		throw error(400, 'Invalid JSON');
	}

	const { firstName, lastName, email, phone, subject, message } = body;

	if (!firstName || !lastName || !email || !subject || !message) {
		throw error(400, 'Missing required fields');
	}

	const transporter = nodemailer.createTransport({
		host: 'mail.inbox.lv',
		port: 465,
		secure: true,
		auth: {
			user: 'sabalancec@inbox.lv',
			pass: '7A8FS6Qnsm'
		},
		tls: {
			rejectUnauthorized: false
		}
	});

	const mailOptions = {
		from: '"Contact Form" <sabalancec@inbox.lv>',
		to: 'sabalancec@inbox.lv',
		subject: `New contact: ${subject}`,
		text: `
New contact form submission:

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || 'Not provided'}
Subject: ${subject}

Message:
${message}
`
	};

	try {
		const info = await transporter.sendMail(mailOptions);
		return new Response(
			JSON.stringify({ message: 'Email sent successfully', messageId: info.messageId }),
			{ status: 200, headers: { 'Content-Type': 'application/json' } }
		);
	} catch (err) {
		console.error('Email send error:', err);
		return new Response(
			JSON.stringify({ message: 'Failed to send email', error: String(err) }),
			{ status: 500, headers: { 'Content-Type': 'application/json' } }
		);
	}
};
