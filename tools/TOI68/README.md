🚀 Login Learning Solver TOI Pro Max Plus Ultra V0.001
โปรเจกต์นี้คือเครื่องมือช่วยแก้โจทย์ปัญหาการเขียนโปรแกรม โดยใช้เทคโนโลยี OCR (Optical Character Recognition) เพื่อดึงข้อความจากไฟล์รูปภาพหรือ PDF และส่งต่อไปให้ Google Gemini API ช่วยวิเคราะห์โจทย์, อธิบายแนวคิด, และสร้างโค้ดโปรแกรมในภาษา C++ และ Python

✨ คุณสมบัติหลัก (Features)
อัปโหลดไฟล์โจทย์: รองรับไฟล์รูปภาพ (.png, .jpg) และ .pdf

OCR อัจฉริยะ: ดึงข้อความจากไฟล์ที่อัปโหลดด้วย Gemini API ทำให้มีความแม่นยำสูง

แก้ไขข้อความได้: ผู้ใช้สามารถตรวจสอบและแก้ไขข้อความที่ได้จาก OCR ก่อนส่งไปวิเคราะห์ต่อได้

AI ช่วยแก้โจทย์: รับคำอธิบายโจทย์, แนวคิด, และโค้ดตัวอย่างจาก Gemini API

รองรับหลายภาษา:

สร้างโค้ดได้ทั้ง C++ และ Python

สามารถเลือกภาษาของคำอธิบายได้ (ไทย, อังกฤษ, หรือแบบผสม)

แปลงโค้ดข้ามภาษา: สามารถสั่งให้ AI แปลงโค้ดจาก C++ เป็น Python หรือกลับกันได้

ปลอดภัย: มีระบบล็อกการแก้ไข API Key ด้วยรหัสผ่าน (0000)

🔧 วิธีการใช้งาน (How to Use)
อัปโหลดไฟล์:

ลากไฟล์โจทย์ (PDF, PNG, JPG) มาวางในโซน "อัปโหลดไฟล์" หรือคลิกเพื่อเลือกไฟล์จากเครื่องของคุณ

ประมวลผล OCR:

เมื่อเลือกไฟล์แล้ว ให้กดปุ่ม "🔍 ประมวลผลไฟล์ (OCR)"

รอสักครู่ ระบบจะดึงข้อความจากไฟล์และแสดงในช่อง "ผลลัพธ์จาก OCR"

ตรวจสอบและแก้ไข:

คุณสามารถแก้ไขข้อความในช่อง OCR ได้ตามต้องการเพื่อให้ถูกต้องที่สุด

ตั้งค่าผลลัพธ์และส่งให้ AI:

เลือกภาษาของคำอธิบาย, ภาษาของโค้ด, และระดับความละเอียดที่ต้องการในส่วน "ตั้งค่าผลลัพธ์"

กดปุ่ม "🤖 ส่งให้ AI วิเคราะห์"

ดูผลลัพธ์:

คำอธิบายและแนวคิดจะปรากฏในช่อง "ผลลัพธ์จาก AI"

โค้ดโปรแกรมจะแสดงในช่อง "โค้ด Python" และ "โค้ด C++"

คุณสามารถกดปุ่ม "📋 คัดลอก" หรือ "🔄 แปลงโค้ด" ได้ตามต้องการ

📁 โครงสร้างไฟล์ (File Structure)
โปรเจกต์นี้ประกอบด้วย 3 ไฟล์หลัก:

index.html: ไฟล์โครงสร้างหลักของหน้าเว็บ

style.css: ไฟล์สำหรับตกแต่งหน้าตาและความสวยงาม (Styling)

script.js: ไฟล์สำหรับเขียนโค้ดการทำงานทั้งหมดของเว็บ (Logic)

🚀 การติดตั้งและใช้งานบน GitHub Pages (Deployment)
คุณสามารถนำโปรเจกต์นี้ไปไว้บน GitHub Pages เพื่อให้สามารถเข้าถึงได้ผ่านอินเทอร์เน็ตตามขั้นตอนง่ายๆ ดังนี้:

สร้าง Repository ใหม่บน GitHub

อัปโหลดไฟล์ทั้ง 3 ไฟล์ (index.html, style.css, script.js) ขึ้นไปบน Repository

ไปที่แท็บ Settings > Pages

ในส่วน "Build and deployment" ให้เลือก Source เป็น Deploy from a branch และเลือก Branch เป็น main

รอสักครู่ เว็บไซต์ของคุณจะพร้อมใช้งาน!

🛠️ เทคโนโลยีที่ใช้ (Tech Stack)
Frontend: HTML, CSS, JavaScript

PDF Processing: PDF.js

AI & OCR: Google Gemini API
