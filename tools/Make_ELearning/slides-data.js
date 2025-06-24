// Make.com E-Learning Slides Data
const slidesData = [
    // Slide 0: รู้จัก Make.com (Already in HTML)
    
    // Slide 1: การสมัครและเริ่มต้น (Already in HTML)
    
    // Slide 2: ส่วนประกอบของ Make
    {
        id: 2,
        title: "🧩 ส่วนประกอบของ Make",
        content: `
            <h2>📋 ส่วนประกอบหลักของ Make.com</h2>
            <p>Make.com ประกอบด้วยส่วนประกอบหลักที่ทำงานร่วมกันเพื่อสร้างระบบอัตโนมัติที่มีประสิทธิภาพ</p>
            
            <div class="feature-grid">
                <div class="feature-card">
                    <i class="fas fa-play-circle"></i>
                    <h4>Scenarios</h4>
                    <p>โครงการอัตโนมัติหลักที่ประกอบด้วย Modules ต่างๆ ที่เชื่อมต่อกัน เปรียบเหมือนสูตรการทำงาน</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-puzzle-piece"></i>
                    <h4>Modules</h4>
                    <p>ส่วนประกอบย่อยที่ทำหน้าที่เฉพาะ เช่น อ่านอีเมล, ส่งข้อความ, สร้างไฟล์</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-mobile-alt"></i>
                    <h4>Apps</h4>
                    <p>แอปพลิเคชันและบริการที่ Make สามารถเชื่อมต่อได้ มากกว่า 1,000+ แอป</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-exchange-alt"></i>
                    <h4>Data Operations</h4>
                    <p>การประมวลผลข้อมูล เปลี่ยนรูปแบบ หรือจัดการข้อมูลระหว่างขั้นตอน</p>
                </div>
            </div>

            <h2>🔗 ประเภทของ Modules</h2>
            <ul>
                <li><strong>Triggers:</strong> เริ่มต้น Scenario เมื่อมีเหตุการณ์เกิดขึ้น</li>
                <li><strong>Actions:</strong> ดำเนินการตามคำสั่งที่กำหนด</li>
                <li><strong>Searches:</strong> ค้นหาข้อมูลจากแหล่งต่างๆ</li>
                <li><strong>Iterators:</strong> จัดการข้อมูลแบบ Array</li>
                <li><strong>Aggregators:</strong> รวบรวมข้อมูลจากหลายแหล่ง</li>
            </ul>

            <div class="highlight-box">
                <h4>🔄 Flow การทำงาน</h4>
                <ol>
                    <li><strong>Trigger:</strong> เหตุการณ์ที่เริ่มต้น Scenario (เช่น อีเมลใหม่)</li>
                    <li><strong>Process:</strong> การประมวลผลข้อมูล (เช่น แยกข้อมูลจากอีเมล)</li>
                    <li><strong>Action:</strong> การดำเนินการ (เช่น สร้าง Task ใน Project Management)</li>
                </ol>
            </div>
        `
    },

    // Slide 3: การสร้าง Scenario แรก
    {
        id: 3,
        title: "🎯 การสร้าง Scenario แรก",
        content: `
            <h2>🚀 เริ่มต้นสร้าง Scenario</h2>
            <p>มาเรียนรู้การสร้าง Scenario แรกของคุณใน Make.com กันเถอะ!</p>
            
            <h3>📋 ขั้นตอนการสร้าง</h3>
            <ol>
                <li><strong>คลิก "Create a new scenario"</strong> จากหน้า Dashboard</li>
                <li><strong>เลือก App</strong> ที่ต้องการใช้เป็น Trigger</li>
                <li><strong>เลือก Module</strong> ที่เหมาะสม</li>
                <li><strong>ตั้งค่า Connection</strong> กับ App นั้น</li>
                <li><strong>กำหนดการตั้งค่า</strong> ของ Module</li>
                <li><strong>เพิ่ม Module ถัดไป</strong> ตามต้องการ</li>
                <li><strong>ทดสอบ</strong> การทำงาน</li>
                <li><strong>เปิดใช้งาน</strong> Scenario</li>
            </ol>

            <h3>💡 ตัวอย่าง Scenario ง่ายๆ</h3>
            <div class="highlight-box">
                <h4>📧 ส่งแจ้งเตือนไป Slack เมื่อมีอีเมลใหม่</h4>
                <ol>
                    <li><strong>Gmail:</strong> "Watch emails" (Trigger)</li>
                    <li><strong>Slack:</strong> "Create a message" (Action)</li>
                </ol>
                <p><strong>ผลลัพธ์:</strong> ทุกครั้งที่มีอีเมลใหม่ ระบบจะส่งข้อความแจ้งเตือนไปที่ Slack</p>
            </div>

            <h3>⚙️ Best Practices</h3>
            <ul>
                <li>เริ่มด้วย Scenario ง่ายๆ ก่อน</li>
                <li>ทดสอบทีละ Module</li>
                <li>ตั้งชื่อ Scenario ให้เข้าใจง่าย</li>
                <li>เพิ่ม Note อธิบายการทำงาน</li>
                <li>ตรวจสอบ Error Handling</li>
            </ul>

            <div class="feature-grid">
                <div class="feature-card">
                    <i class="fas fa-lightbulb"></i>
                    <h4>เริ่มต้นง่าย</h4>
                    <p>เริ่มจาก 2-3 Modules ก่อน แล้วค่อยเพิ่มความซับซ้อน</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-test-tube"></i>
                    <h4>ทดสอบบ่อยๆ</h4>
                    <p>ทดสอบหลังจากเพิ่ม Module ใหม่ทุกครั้ง</p>
                </div>
            </div>
        `
    },

    // Slide 4: Modules และ Apps
    {
        id: 4,
        title: "🔧 Modules และ Apps",
        content: `
            <h2>📱 Apps ยอดนิยมใน Make.com</h2>
            <p>Make.com รองรับ Apps มากกว่า 1,000+ แอป ที่ใช้งานกันทั่วไป</p>
            
            <div class="feature-grid">
                <div class="feature-card">
                    <i class="fab fa-google"></i>
                    <h4>Google Workspace</h4>
                    <p>Gmail, Google Sheets, Google Drive, Google Calendar, Google Docs</p>
                </div>
                <div class="feature-card">
                    <i class="fab fa-microsoft"></i>
                    <h4>Microsoft 365</h4>
                    <p>Outlook, Excel Online, OneDrive, Teams, SharePoint</p>
                </div>
                <div class="feature-card">
                    <i class="fab fa-slack"></i>
                    <h4>Communication</h4>
                    <p>Slack, Discord, Telegram, WhatsApp Business, Zoom</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-chart-bar"></i>
                    <h4>CRM & Sales</h4>
                    <p>Salesforce, HubSpot, Pipedrive, Airtable, Notion</p>
                </div>
                <div class="feature-card">
                    <i class="fab fa-facebook"></i>
                    <h4>Social Media</h4>
                    <p>Facebook, Instagram, Twitter, LinkedIn, YouTube</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-shopping-cart"></i>
                    <h4>E-commerce</h4>
                    <p>Shopify, WooCommerce, Stripe, PayPal, Magento</p>
                </div>
            </div>

            <h2>🔩 ประเภทของ Modules</h2>
            
            <h3>🎯 Trigger Modules</h3>
            <ul>
                <li><strong>Instant Triggers:</strong> ทำงานทันทีเมื่อมีเหตุการณ์ (Webhooks)</li>
                <li><strong>Polling Triggers:</strong> ตรวจสอบเป็นระยะ (ทุก 15 นาที, 1 ชั่วโมง)</li>
                <li><strong>Schedule Triggers:</strong> ทำงานตามเวลาที่กำหนด</li>
            </ul>

            <h3>⚡ Action Modules</h3>
            <ul>
                <li><strong>Create:</strong> สร้างข้อมูลใหม่</li>
                <li><strong>Update:</strong> อัพเดทข้อมูลที่มีอยู่</li>
                <li><strong>Delete:</strong> ลบข้อมูล</li>
                <li><strong>Get/Search:</strong> ค้นหาหรือดึงข้อมูล</li>
            </ul>

            <div class="highlight-box">
                <h4>💰 การนับ Operations</h4>
                <p>Make.com นับ Operations ตามจำนวน Modules ที่ทำงาน ไม่ใช่ตาม Scenarios</p>
                <ul>
                    <li>1 Module ทำงาน = 1 Operation</li>
                    <li>Trigger ที่ไม่เจอข้อมูลใหม่ = ไม่นับ Operation</li>
                    <li>Module ที่ Error = ยังคงนับ Operation</li>
                </ul>
            </div>

            <h3>🔄 การเชื่อมต่อ Modules</h3>
            <p>การเชื่อมต่อ Modules ทำได้หลายรูปแบบ:</p>
            <ul>
                <li><strong>Linear:</strong> เชื่อมต่อเป็นเส้นตรง</li>
                <li><strong>Conditional:</strong> ใช้ Router และ Filter</li>
                <li><strong>Parallel:</strong> แยกสาขาทำงานพร้อมกัน</li>
                <li><strong>Loop:</strong> ทำงานซ้ำกับข้อมูลหลายรายการ</li>
            </ul>
        `
    },

    // Slide 5: การเชื่อมต่อ Services
    {
        id: 5,
        title: "🔗 การเชื่อมต่อ Services",
        content: `
            <h2>🔐 การสร้าง Connection</h2>
            <p>Connection คือการเชื่อมต่อระหว่าง Make.com กับ Apps ภายนอก ผ่านการ Authentication</p>
            
            <h3>📋 ขั้นตอนการสร้าง Connection</h3>
            <ol>
                <li><strong>เลือก App</strong> ที่ต้องการเชื่อมต่อ</li>
                <li><strong>คลิก "Add" Connection</strong></li>
                <li><strong>ตั้งชื่อ Connection</strong> ให้เข้าใจง่าย</li>
                <li><strong>ทำการ Authentication</strong> ตามประเภท</li>
                <li><strong>ทดสอบ Connection</strong></li>
                <li><strong>บันทึก</strong> และนำไปใช้งาน</li>
            </ol>

            <h3>🔑 ประเภทของ Authentication</h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <i class="fas fa-key"></i>
                    <h4>OAuth 2.0</h4>
                    <p>ใช้กับ Google, Facebook, Microsoft - ล็อกอินผ่านหน้าเว็บ</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-code"></i>
                    <h4>API Key</h4>
                    <p>ใช้กับ Airtable, Notion - ใส่ API Key โดยตรง</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-user-circle"></i>
                    <h4>Basic Auth</h4>
                    <p>ใช้ Username และ Password</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-certificate"></i>
                    <h4>Custom Auth</h4>
                    <p>การ Authentication แบบกำหนดเอง</p>
                </div>
            </div>

            <h3>⚙️ การจัดการ Connections</h3>
            <ul>
                <li><strong>หลาย Connections:</strong> สามารถสร้างได้หลาย Connection สำหรับ App เดียวกัน</li>
                <li><strong>การแชร์:</strong> แชร์ Connection ให้ทีมงานใช้ร่วมกัน</li>
                <li><strong>การเปลี่ยน:</strong> เปลี่ยน Connection ในแต่ละ Module ได้</li>
                <li><strong>การต่ออายุ:</strong> บาง Connection หมดอายุและต้องต่ออายุ</li>
            </ul>

            <div class="highlight-box">
                <h4>🛡️ Security Best Practices</h4>
                <ul>
                    <li>ใช้ชื่อ Connection ที่ระบุตัวตนได้ชัดเจน</li>
                    <li>ตรวจสอบสิทธิ์ที่ให้กับ App เป็นระยะ</li>
                    <li>ใช้ API Key แทน Username/Password เมื่อเป็นไปได้</li>
                    <li>ลบ Connection ที่ไม่ใช้แล้ว</li>
                    <li>ไม่แชร์ API Key ให้คนอื่น</li>
                </ul>
            </div>

            <h3>🔧 Troubleshooting Connections</h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <i class="fas fa-exclamation-triangle"></i>
                    <h4>Connection Failed</h4>
                    <p>ตรวจสอบ API Key, Username/Password หรือสิทธิ์การเข้าถึง</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-clock"></i>
                    <h4>Connection Expired</h4>
                    <p>ต่ออายุ Token หรือสร้าง Connection ใหม่</p>
                </div>
            </div>
        `
    },

    // Slide 6: Data Mapping
    {
        id: 6,
        title: "🗺️ Data Mapping",
        content: `
            <h2>📊 การจับคู่ข้อมูล (Data Mapping)</h2>
            <p>Data Mapping คือการเลือกและจับคู่ข้อมูลจาก Module หนึ่งไปยัง Module อื่น</p>
            
            <h3>🎯 หลักการของ Data Mapping</h3>
            <ul>
                <li><strong>Input Fields:</strong> ช่องข้อมูลที่ต้องการใส่</li>
                <li><strong>Output Data:</strong> ข้อมูลที่ได้จาก Module ก่อนหน้า</li>
                <li><strong>Static Values:</strong> ค่าคงที่ที่เราใส่เอง</li>
                <li><strong>Functions:</strong> ฟังก์ชันในการประมวลผลข้อมูล</li>
            </ul>

            <div class="feature-grid">
                <div class="feature-card">
                    <i class="fas fa-mouse-pointer"></i>
                    <h4>การเลือกข้อมูล</h4>
                    <p>คลิกที่ช่องข้อมูล และเลือกจาก Panel ด้านขาง</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-code"></i>
                    <h4>การใช้ Functions</h4>
                    <p>เลือกใช้ฟังก์ชันในการแปลงหรือประมวลผลข้อมูล</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-plus"></i>
                    <h4>การรวมข้อมูล</h4>
                    <p>รวมข้อมูลหลายฟิลด์หรือเพิ่มข้อความ</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-filter"></i>
                    <h4>การกรองข้อมูล</h4>
                    <p>เลือกเฉพาะข้อมูลที่ต้องการใช้</p>
                </div>
            </div>

            <h3>🔧 ฟังก์ชันที่ใช้บ่อย</h3>
            
            <h4>📝 Text Functions</h4>
            <ul>
                <li><strong>upper():</strong> แปลงเป็นตัวพิมพ์ใหญ่</li>
                <li><strong>lower():</strong> แปลงเป็นตัวพิมพ์เล็ก</li>
                <li><strong>trim():</strong> ตัดช่องว่างหน้าหลัง</li>
                <li><strong>substring():</strong> ตัดข้อความ</li>
                <li><strong>replace():</strong> แทนที่ข้อความ</li>
            </ul>

            <h4>📅 Date Functions</h4>
            <ul>
                <li><strong>now:</strong> วันที่ปัจจุบัน</li>
                <li><strong>formatDate():</strong> จัดรูปแบบวันที่</li>
                <li><strong>addDays():</strong> เพิ่มวัน</li>
                <li><strong>parseDate():</strong> แปลงข้อความเป็นวันที่</li>
            </ul>

            <h4>🔢 Math Functions</h4>
            <ul>
                <li><strong>round():</strong> ปัดเศษ</li>
                <li><strong>sum():</strong> รวมค่า</li>
                <li><strong>multiply():</strong> คูณ</li>
                <li><strong>divide():</strong> หาร</li>
            </ul>

            <div class="highlight-box">
                <h4>💡 Tips สำหรับ Data Mapping</h4>
                <ul>
                    <li>ใช้ "Map" Toggle เพื่อเลือกข้อมูลจาก Module ก่อนหน้า</li>
                    <li>ทดสอบ Mapping ด้วยข้อมูลจริง</li>
                    <li>ใช้ Text Mode สำหรับการรวมข้อมูลซับซ้อน</li>
                    <li>ตรวจสอบ Data Type ให้ตรงกัน</li>
                    <li>เตรียม Default Values สำหรับข้อมูลที่อาจจะไม่มี</li>
                </ul>
            </div>

            <h3>📋 ตัวอย่าง Data Mapping</h3>
            <div class="code-block">
Gmail Subject: "New Order #12345"
Gmail From: "customer@email.com"

↓ Mapping to Slack Message ↓

Text: "🛒 New order received!
Order: {{Gmail.Subject}}
Customer: {{Gmail.From}}
Time: {{formatDate(now; 'DD/MM/YYYY HH:mm')}}"

Result: "🛒 New order received!
Order: New Order #12345  
Customer: customer@email.com
Time: 16/06/2025 14:30"
            </div>
        `
    },

    // Slide 7: Filters และ Routers
    {
        id: 7,
        title: "🔀 Filters และ Routers",
        content: `
            <h2>🚦 การใช้ Filters</h2>
            <p>Filters ใช้กรองข้อมูลก่อนส่งต่อไปยัง Module ถัดไป ช่วยให้ Scenario ทำงานเฉพาะเมื่อเงื่อนไขตรงตามที่กำหนด</p>
            
            <h3>📋 ประเภทของ Filters</h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <i class="fas fa-equals"></i>
                    <h4>Equal / Not Equal</h4>
                    <p>เปรียบเทียบค่าเท่ากับหรือไม่เท่ากับค่าที่กำหนด</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-greater-than"></i>
                    <h4>Greater / Less Than</h4>
                    <p>เปรียบเทียบค่ามากกว่าหรือน้อยกว่า (ตัวเลข, วันที่)</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-search"></i>
                    <h4>Contains / Not Contains</h4>
                    <p>ตรวจสอบว่าข้อความมีหรือไม่มีคำที่กำหนด</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-check-circle"></i>
                    <h4>Exists / Not Exists</h4>
                    <p>ตรวจสอบว่าฟิลด์มีข้อมูลหรือว่าง</p>
                </div>
            </div>

            <h3>🔄 การใช้ Routers</h3>
            <p>Router ใช้แยกทางการทำงานของ Scenario ตามเงื่อนไขต่างๆ ทำให้สามารถจัดการข้อมูลได้หลากหลาย</p>
            
            <div class="highlight-box">
                <h4>🎯 ตัวอย่างการใช้ Router</h4>
                <div class="code-block">
Gmail → Router
├── Route 1: IF Subject contains "งาน" → Slack #work-channel
├── Route 2: IF Subject contains "เงิน" → Slack #finance-channel  
└── Route 3: IF Subject contains "ด่วน" → SMS + Slack #urgent
                </div>
            </div>

            <h3>⚙️ การตั้งค่า Filter</h3>
            <ol>
                <li><strong>เลือกฟิลด์:</strong> เลือกข้อมูลที่ต้องการกรอง</li>
                <li><strong>เลือกเงื่อนไข:</strong> Equal, Contains, Greater than ฯลฯ</li>
                <li><strong>ใส่ค่าเปรียบเทียบ:</strong> ค่าที่ต้องการเปรียบเทียบ</li>
                <li><strong>เลือก Logic:</strong> AND, OR สำหรับหลายเงื่อนไข</li>
            </ol>

            <h3>💡 Best Practices</h3>
            <ul>
                <li>ใช้ Filter ใกล้ต้นสาย Scenario เพื่อประหยัด Operations</li>
                <li>ทดสอบ Filter ด้วยข้อมูลจริง</li>
                <li>ใช้ "Fallback Route" สำหรับข้อมูลที่ไม่ตรงเงื่อนไข</li>
                <li>จัดกลุม Routes ที่เกี่ยวข้องกัน</li>
                <li>ใส่ Comment อธิบายเงื่อนไขที่ซับซ้อน</li>
            </ul>

            <div class="feature-grid">
                <div class="feature-card">
                    <i class="fas fa-lightbulb"></i>
                    <h4>กรองอีเมลสำคัญ</h4>
                    <p>กรองอีเมลที่มี Priority: High เพื่อส่งแจ้งเตือนทันที</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-calendar-check"></i>
                    <h4>กรองตามวันที่</h4>
                    <p>ประมวลผลเฉพาะข้อมูลที่สร้างในช่วงเวลาที่กำหนด</p>
                </div>
            </div>
        `
    },

    // Slide 8: Error Handling
    {
        id: 8,
        title: "⚠️ Error Handling",
        content: `
            <h2>🛠️ การจัดการ Error ใน Make.com</h2>
            <p>Error Handling เป็นส่วนสำคัญที่ช่วยให้ Scenario ทำงานต่อไปได้แม้เจอปัญหา</p>
            
            <h3>📋 ประเภทของ Errors</h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <i class="fas fa-times-circle" style="color: #ef4444;"></i>
                    <h4>Connection Errors</h4>
                    <p>ปัญหาการเชื่อมต่อกับ API หรือ Service ภายนอก</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-exclamation-triangle" style="color: #f59e0b;"></i>
                    <h4>Data Errors</h4>
                    <p>ข้อมูลไม่ครบ รูปแบบผิด หรือไม่ตรงตามที่คาดหวัง</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-ban" style="color: #dc2626;"></i>
                    <h4>Permission Errors</h4>
                    <p>ไม่มีสิทธิ์เข้าถึงข้อมูลหรือทำการแก้ไข</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-hourglass-half" style="color: #6b7280;"></i>
                    <h4>Timeout Errors</h4>
                    <p>การประมวลผลใช้เวลานานเกินกำหนด</p>
                </div>
            </div>

            <h3>🔧 Error Handlers</h3>
            <p>Make.com มี Error Handlers ที่ช่วยจัดการกับ Errors:</p>
            
            <h4>1. 🔄 Resume</h4>
            <ul>
                <li>ข้าม Error แล้วทำงานต่อ</li>
                <li>เหมาะกับ Error ที่ไม่สำคัญ</li>
                <li>บันทึก Log แล้วไม่หยุดการทำงาน</li>
            </ul>

            <h4>2. 🔁 Retry</h4>
            <ul>
                <li>ลองทำงานใหม่หลายครั้ง</li>
                <li>เหมาะกับ Temporary Errors</li>
                <li>กำหนดจำนวนครั้งและช่วงเวลา</li>
            </ul>

            <h4>3. ⏭️ Break</h4>
            <ul>
                <li>หยุดการทำงานของ Scenario</li>
                <li>เหมาะกับ Critical Errors</li>
                <li>ส่งการแจ้งเตือน Error</li>
            </ul>

            <h4>4. 📤 Commit</h4>
            <ul>
                <li>บันทึกผลลัพธ์ที่ได้</li>
                <li>แล้วหยุดการทำงาน</li>
                <li>เหมาะกับงานที่ทำบางส่วนเสร็จแล้ว</li>
            </ul>

            <div class="highlight-box">
                <h4>💡 Error Handling Strategy</h4>
                <div class="code-block">
Gmail (Watch) → Try: Create Task in Asana
│
├── Success: Continue to next module
│
└── Error: 
    ├── Connection Error → Retry 3 times
    ├── Data Error → Log to Google Sheets + Resume
    └── Critical Error → Send notification + Break
                </div>
            </div>

            <h3>📊 Error Monitoring</h3>
            <ul>
                <li><strong>Execution History:</strong> ดู Log การทำงานและ Errors</li>
                <li><strong>Error Notifications:</strong> ตั้งค่าแจ้งเตือนเมื่อมี Error</li>
                <li><strong>Error Reports:</strong> สร้างรายงาน Error แบบสรุป</li>
                <li><strong>Dashboard:</strong> ติดตาม Error Rate ของ Scenarios</li>
            </ul>

            <h3>🛡️ Preventive Measures</h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <i class="fas fa-check-double"></i>
                    <h4>Data Validation</h4>
                    <p>ตรวจสอบข้อมูลก่อนส่งต่อ</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-shield-alt"></i>
                    <h4>Input Sanitization</h4>
                    <p>ทำความสะอาดข้อมูลที่รับเข้ามา</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-clock"></i>
                    <h4>Rate Limiting</h4>
                    <p>จำกัดจำนวนการเรียกใช้ API</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-database"></i>
                    <h4>Backup Data</h4>
                    <p>สำรองข้อมูลสำคัญ</p>
                </div>
            </div>
        `
    },

    // Slide 9: การทดสอบ Scenario
    {
        id: 9,
        title: "🧪 การทดสอบ Scenario",
        content: `
            <h2>🔍 การทดสอบและ Debug Scenarios</h2>
            <p>การทดสอบ Scenario อย่างถูกต้องเป็นกุญแจสำคัญสู่ความสำเร็จของระบบอัตโนมัติ</p>
            
            <h3>🎯 ประเภทการทดสอบ</h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <i class="fas fa-play"></i>
                    <h4>Run Once</h4>
                    <p>ทดสอบทั้ง Scenario ครั้งเดียวด้วยข้อมูลปัจจุบัน</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-step-forward"></i>
                    <h4>Run from Here</h4>
                    <p>ทดสอบเริ่มจาก Module ที่เลือก</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-bug"></i>
                    <h4>Debug Mode</h4>
                    <p>ดูรายละเอียดการทำงานทีละขั้นตอน</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-history"></i>
                    <h4>Execution History</h4>
                    <p>ดู Log การทำงานที่ผ่านมา</p>
                </div>
            </div>

            <h3>📊 การอ่าน Execution Results</h3>
            <div class="highlight-box">
                <h4>🔍 สัญลักษณ์ใน Execution</h4>
                <ul>
                    <li><strong>✅ เขียว:</strong> Module ทำงานสำเร็จ</li>
                    <li><strong>❌ แดง:</strong> Module Error</li>
                    <li><strong>⚠️ เหลือง:</strong> Warning หรือ Partial Success</li>
                    <li><strong>⏭️ เทา:</strong> Module ถูกข้าม</li>
                    <li><strong>🔵 น้ำเงิน:</strong> กำลังทำงาน</li>
                </ul>
            </div>

            <h3>🛠️ Tools สำหรับ Testing</h3>
            
            <h4>1. 📝 Data Inspector</h4>
            <ul>
                <li>ดูข้อมูลที่ผ่านแต่ละ Module</li>
                <li>ตรวจสอบ Data Structure</li>
                <li>เข้าใจ Data Flow</li>
            </ul>

            <h4>2. 🎭 Test Data</h4>
            <ul>
                <li>สร้างข้อมูลทดสอบ</li>
                <li>ใช้ Webhook.site สำหรับทดสอบ Webhooks</li>
                <li>ใช้ Test Accounts สำหรับ Apps</li>
            </ul>

            <h4>3. 📋 Scenario Templates</h4>
            <ul>
                <li>สร้าง Template สำหรับทดสอบ</li>
                <li>ใช้ Development Environment</li>
                <li>แยก Production และ Testing</li>
            </ul>

            <h3>🐛 Common Issues และวิธีแก้</h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <i class="fas fa-exclamation-circle"></i>
                    <h4>No Data</h4>
                    <p><strong>สาเหตุ:</strong> Trigger ไม่เจอข้อมูลใหม่<br>
                    <strong>แก้ไข:</strong> ตรวจสอบ Filter และ Trigger Settings</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-ban"></i>
                    <h4>Permission Denied</h4>
                    <p><strong>สาเหตุ:</strong> Connection ไม่มีสิทธิ์<br>
                    <strong>แก้ไข:</strong> Re-authorize Connection</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-map-pin"></i>
                    <h4>Mapping Error</h4>
                    <p><strong>สาเหตุ:</strong> Data Type ไม่ตรงกัน<br>
                    <strong>แก้ไข:</strong> ใช้ Functions แปลงข้อมูล</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-clock"></i>
                    <h4>Timeout</h4>
                    <p><strong>สาเหตุ:</strong> Process ช้าเกินไป<br>
                    <strong>แก้ไข:</strong> แบ่งงานเป็นส่วนย่อยๆ</p>
                </div>
            </div>

            <h3>✅ Testing Checklist</h3>
            <div class="highlight-box">
                <h4>📋 ก่อน Deploy Production</h4>
                <ol>
                    <li>✅ ทดสอบด้วยข้อมูลจริง</li>
                    <li>✅ ทดสอบ Edge Cases</li>
                    <li>✅ ทดสอบ Error Scenarios</li>
                    <li>✅ ตรวจสอบ Data Validation</li>
                    <li>✅ ทดสอบ Performance</li>
                    <li>✅ ตั้งค่า Error Handling</li>
                    <li>✅ เตรียม Rollback Plan</li>
                    <li>✅ Documentation</li>
                </ol>
            </div>

            <h3>📈 Performance Testing</h3>
            <ul>
                <li><strong>Load Testing:</strong> ทดสอบกับข้อมูลจำนวนมาก</li>
                <li><strong>Concurrency:</strong> ทดสอบการทำงานพร้อมกัน</li>
                <li><strong>Resource Usage:</strong> ตรวจสอบ Operations ที่ใช้</li>
                <li><strong>Response Time:</strong> วัดเวลาการประมวลผล</li>
            </ul>
        `
    },

    // Slide 10: Scheduling
    {
        id: 10,
        title: "⏰ Scheduling",
        content: `
            <h2>📅 การกำหนดเวลาทำงาน (Scheduling)</h2>
            <p>Scheduling ใน Make.com ช่วยให้ Scenarios ทำงานอัตโนมัติตามเวลาที่กำหนด</p>
            
            <h3>🕐 ประเภทของ Scheduling</h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <i class="fas fa-clock"></i>
                    <h4>Interval Scheduling</h4>
                    <p>ทำงานทุกๆ X นาที/ชั่วโมง/วัน</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-calendar-day"></i>
                    <h4>Daily Scheduling</h4>
                    <p>ทำงานทุกวันในช่วงเวลาที่กำหนด</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-calendar-week"></i>
                    <h4>Weekly Scheduling</h4>
                    <p>ทำงานเฉพาะวันในสัปดาห์ที่เลือก</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-calendar-alt"></i>
                    <h4>Custom Cron</h4>
                    <p>กำหนดเวลาด้วย Cron Expression</p>
                </div>
            </div>

            <h3>⚙️ การตั้งค่า Trigger Scheduling</h3>
            
            <h4>📋 Polling Triggers</h4>
            <p>ส่วนใหญ่ Triggers ใน Make.com เป็น Polling แบบ:</p>
            <ul>
                <li><strong>ทุก 15 นาที:</strong> ฟรีแพลน (เร็วที่สุด)</li>
                <li><strong>ทุก 5 นาที:</strong> Core แพลนขึ้นไป</li>
                <li><strong>ทุก 1 นาที:</strong> Pro แพลนขึ้นไป</li>
                <li><strong>Instant:</strong> สำหรับ Webhooks</li>
            </ul>

            <div class="highlight-box">
                <h4>📊 ตัวอย่าง Scheduling</h4>
                <div class="code-block">
รายงานยอดขายรายวัน:
⏰ ทุกวันเวลา 09:00 น.
📊 Google Sheets → ประมวลผลข้อมูล → Email รายงาน

สำรองข้อมูลรายสัปดาห์:  
⏰ ทุกวันอาทิตย์เวลา 02:00 น.
💾 Database → Export → Google Drive

ตรวจสอบสต็อกสินค้า:
⏰ ทุก 2 ชั่วโมงในเวลาทำการ
📦 Inventory System → Check Stock → Alert if Low
                </div>
            </div>

            <h3>🎯 Schedule Trigger Module</h3>
            <p>ใช้ Schedule Trigger เมื่อต้องการให้ Scenario ทำงานตามเวลาที่กำหนดเอง</p>
            
            <h4>การตั้งค่า Schedule:</h4>
            <ol>
                <li><strong>เพิ่ม Schedule Trigger:</strong> เลือกจาก Tools → Schedule</li>
                <li><strong>เลือกรูปแบบ:</strong> Daily, Weekly, Monthly, หรือ Cron</li>
                <li><strong>กำหนดเวลา:</strong> ระบุเวลาและวันที่</li>
                <li><strong>เลือก Timezone:</strong> กำหนดเขตเวลา</li>
                <li><strong>ทดสอบ:</strong> ใช้ "Run Once" ทดสอบ</li>
            </ol>

            <h3>🌍 Timezone Management</h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <i class="fas fa-globe"></i>
                    <h4>UTC vs Local Time</h4>
                    <p>Make.com ใช้ UTC เป็นมาตรฐาน แต่สามารถเลือก Timezone ได้</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-clock"></i>
                    <h4>Daylight Saving</h4>
                    <p>ระวังการเปลี่ยนเวลาใน Timezone ที่มี DST</p>
                </div>
            </div>

            <h3>📊 Cron Expressions</h3>
            <p>สำหรับการกำหนดเวลาที่ซับซ้อน:</p>
            
            <div class="code-block">
Format: * * * * * (นาที ชั่วโมง วัน เดือน วันในสัปดาห์)

ตัวอย่าง:
0 9 * * 1-5    = 09:00 น. วันจันทร์-ศุกร์
0 */2 * * *    = ทุก 2 ชั่วโมง
30 18 * * 0    = 18:30 น. ทุกวันอาทิตย์
0 0 1 * *      = เที่ยงคืนวันที่ 1 ของทุกเดือน
            </div>

            <h3>💡 Best Practices</h3>
            <ul>
                <li><strong>หลีกเลี่ยงเวลาเดียวกัน:</strong> กระจาย Schedule ให้ทั่วถึง</li>
                <li><strong>คิดถึง Load:</strong> อย่าให้ Scenarios หลายตัวทำงานพร้อมกัน</li>
                <li><strong>เตรียม Error Handling:</strong> วางแผนสำหรับกรณี Service ล่ม</li>
                <li><strong>Monitor Usage:</strong> ติดตาม Operations ที่ใช้</li>
                <li><strong>Documentation:</strong> บันทึกเหตุผลของแต่ละ Schedule</li>
            </ul>

            <h3>⚡ Optimization Tips</h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <i class="fas fa-battery-half"></i>
                    <h4>Batch Processing</h4>
                    <p>รวมงานเล็กๆ ทำพร้อมกันแทนที่จะทำบ่อยๆ</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-filter"></i>
                    <h4>Smart Filtering</h4>
                    <p>ใช้ Filter ลดข้อมูลที่ต้องประมวลผล</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-pause"></i>
                    <h4>Off-Peak Hours</h4>
                    <p>กำหนดงานหนักในช่วงเวลาที่ไม่พุ่ง</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-chart-line"></i>
                    <h4>Performance Monitoring</h4>
                    <p>ติดตามและปรับแต่ง Schedule ตามผล</p>
                </div>
            </div>
        `
    },

    // Slide 11: Webhooks
    {
        id: 11,
        title: "🔗 Webhooks",
        content: `
            <h2>⚡ การใช้ Webhooks ใน Make.com</h2>
            <p>Webhooks คือการส่งข้อมูลแบบ Real-time จาก App หนึ่งไปยัง Make.com ทันทีที่มีเหตุการณ์เกิดขึ้น</p>
            
            <h3>🆚 Webhooks vs Polling</h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <i class="fas fa-bolt" style="color: #10b981;"></i>
                    <h4>Webhooks</h4>
                    <p>• Real-time (ทันที)<br>
                    • ไม่เสีย Operations<br>  
                    • ต้องตั้งค่า URL<br>
                    • รองรับไม่ครบทุก Apps</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-clock" style="color: #f59e0b;"></i>
                    <h4>Polling</h4>
                    <p>• ตรวจสอบเป็นระยะ<br>
                    • เสีย Operations<br>
                    • ตั้งค่าง่าย<br>
                    • รองรับทุก Apps</p>
                </div>
            </div>

            <h3>🛠️ การตั้งค่า Webhook</h3>
            <ol>
                <li><strong>สร้าง Webhook Trigger:</strong> เลือก "Webhooks" → "Custom webhook"</li>
                <li><strong>Copy URL:</strong> คัดลอก Webhook URL ที่ Make สร้างให้</li>
                <li><strong>ตั้งค่าใน App:</strong> ไปที่ App ภายนอกและใส่ URL</li>
                <li><strong>กำหนด Events:</strong> เลือกเหตุการณ์ที่ต้องการติดตาม</li>
                <li><strong>ทดสอบ:</strong> ส่งข้อมูลทดสอบ</li>
            </ol>

            <h3>🔧 ประเภทของ Webhooks</h3>
            
            <h4>1. 📨 Custom Webhooks</h4>
            <ul>
                <li>สร้าง URL เอง</li>
                <li>รับข้อมูลจากแหล่งใดก็ได้</li>
                <li>ยืดหยุ่นที่สุด</li>
            </ul>

            <h4>2. 🎯 App-specific Webhooks</h4>
            <ul>
                <li>Webhooks ที่ Apps สร้างไว้</li>
                <li>เช่น GitHub, Shopify, Stripe</li>
                <li>ตั้งค่าง่าย มีเอกสารครบ</li>
            </ul>

            <div class="highlight-box">
                <h4>💡 ตัวอย่างการใช้ Webhook</h4>
                <div class="code-block">
E-commerce Store → Webhook → Make.com
│
├── New Order → Send confirmation email
├── Payment Success → Update inventory  
├── Refund Request → Notify support team
└── Product Review → Post to social media
                </div>
            </div>

            <h3>🔐 Webhook Security</h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <i class="fas fa-key"></i>
                    <h4>Signature Verification</h4>
                    <p>ตรวจสอบ HMAC signature ว่าข้อมูลมาจากแหล่งที่ถูกต้อง</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-lock"></i>
                    <h4>HTTPS Only</h4>
                    <p>ใช้ HTTPS สำหรับความปลอดภัย</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-filter"></i>
                    <h4>IP Whitelist</h4>
                    <p>จำกัด IP ที่สามารถส่งข้อมูลได้</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-shield-alt"></i>
                    <h4>Rate Limiting</h4>
                    <p>จำกัดจำนวนคำขอต่อนาที</p>
                </div>
            </div>

            <h3>🎭 Testing Webhooks</h3>
            <p>เครื่องมือสำหรับทดสอบ Webhooks:</p>
            <ul>
                <li><strong>Webhook.site:</strong> ทดสอบและดูข้อมูลที่ส่งมา</li>
                <li><strong>ngrok:</strong> สร้าง tunnel สำหรับ local testing</li>
                <li><strong>Postman:</strong> ส่งข้อมูลทดสอบ</li>
                <li><strong>Make's Test:</strong> ใช้ "Run once" ทดสอบ</li>
            </ul>

            <h3>🐛 Troubleshooting</h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <i class="fas fa-times-circle"></i>
                    <h4>ไม่ได้รับข้อมูล</h4>
                    <p>• ตรวจสอบ URL<br>
                    • ตรวจสอบ Event settings<br>
                    • ดู Webhook logs</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-exclamation-triangle"></i>
                    <h4>ข้อมูลผิดรูปแบบ</h4>
                    <p>• ตรวจสอบ Content-Type<br>
                    • ใช้ Data transformation<br>
                    • อ่าน API documentation</p>
                </div>
            </div>

            <h3>💡 Best Practices</h3>
            <ul>
                <li>ใช้ Webhooks แทน Polling เมื่อเป็นไปได้</li>
                <li>ตั้งค่า Error handling สำหรับ failed deliveries</li>
                <li>Log Webhook data สำหรับ debugging</li>
                <li>ใช้ Queue สำหรับ high-volume events</li>
                <li>Test กับ real events ก่อน production</li>
            </ul>
        `
    },

    // Slide 12: Advanced Features
    {
        id: 12,
        title: "🚀 Advanced Features",
        content: `
            <h2>🎯 Advanced Features ใน Make.com</h2>
            <p>เรียนรู้ฟีเจอร์ขั้นสูงที่จะช่วยให้ Scenarios ของคุณมีประสิทธิภาพมากขึ้น</p>
            
            <h3>🔄 Iterators & Aggregators</h3>
            
            <h4>🔁 Iterator</h4>
            <p>ใช้ประมวลผลข้อมูลแบบ Array ทีละรายการ</p>
            <div class="highlight-box">
                <h4>💡 ตัวอย่าง Iterator</h4>
                <div class="code-block">
Google Sheets (รายชื่อลูกค้า 100 คน)
↓
Iterator (แยกทีละคน)
↓  
Gmail (ส่งอีเมลให้แต่ละคน)

Result: ส่งอีเมลไปหาลูกค้า 100 คน
                </div>
            </div>

            <h4>📊 Aggregator</h4>
            <p>รวบรวมข้อมูลจากหลายๆ รายการให้เป็นชุดเดียว</p>
            <div class="highlight-box">
                <h4>💡 ตัวอย่าง Aggregator</h4>
                <div class="code-block">
Multiple APIs (ข้อมูลยอดขายจาก 5 สาขา)
↓
Aggregator (รวมข้อมูลทั้งหมด)
↓
Google Sheets (สร้างรายงานรวม)

Result: รายงานสรุปยอดขายทั้งบริษัท
                </div>
            </div>

            <h3>🎛️ Variables & Data Stores</h3>
            
            <h4>📝 Variables</h4>
            <ul>
                <li>เก็บข้อมูลชั่วคราวใน Scenario</li>
                <li>ใช้แชร์ข้อมูลระหว่าง Modules</li>
                <li>Set Variable → Get Variable</li>
            </ul>

            <h4>💾 Data Stores</h4>
            <ul>
                <li>เก็บข้อมูลถาวรระหว่าง Scenarios</li>
                <li>เหมือน Database เล็กๆ</li>
                <li>Add/Search/Update/Delete records</li>
            </ul>

            <div class="feature-grid">
                <div class="feature-card">
                    <i class="fas fa-memory"></i>
                    <h4>เก็บ Counters</h4>
                    <p>นับจำนวนครั้งที่ Scenario ทำงาน</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-history"></i>
                    <h4>เก็บ History</h4>
                    <p>บันทึกข้อมูลที่ประมวลผลแล้ว</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-user-check"></i>
                    <h4>User Preferences</h4>
                    <p>เก็บการตั้งค่าของผู้ใช้</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-sync"></i>
                    <h4>Sync Status</h4>
                    <p>ติดตามสถานะการซิงค์ข้อมูล</p>
                </div>
            </div>

            <h3>🔄 Functions & Formulas</h3>
            
            <h4>🧮 Math Functions</h4>
            <ul>
                <li><strong>sum(), average(), max(), min():</strong> คำนวณพื้นฐาน</li>
                <li><strong>round(), floor(), ceil():</strong> ปัดเศษ</li>
                <li><strong>random():</strong> สุ่มตัวเลข</li>
            </ul>

            <h4>📝 String Functions</h4>
            <ul>
                <li><strong>split(), join():</strong> แยกและรวมข้อความ</li>
                <li><strong>replace(), trim():</strong> แก้ไขข้อความ</li>
                <li><strong>length(), substring():</strong> จัดการความยาว</li>
            </ul>

            <h4>📅 Date Functions</h4>
            <ul>
                <li><strong>now, today:</strong> วันที่ปัจจุบัน</li>
                <li><strong>addDays(), subDays():</strong> บวกลบวันที่</li>
                <li><strong>formatDate():</strong> จัดรูปแบบ</li>
            </ul>

            <h3>🎪 Advanced Routing</h3>
            
            <h4>🔀 Multiple Routes</h4>
            <p>แยกการทำงานตามเงื่อนไขซับซ้อน</p>
            
            <h4>🔄 Loops & Conditions</h4>
            <p>สร้างลูปและเงื่อนไขที่ซับซ้อน</p>

            <h4>🎯 Custom Logic</h4>
            <p>ใช้ JavaScript สำหรับงานที่ซับซ้อน</p>

            <div class="highlight-box">
                <h4>🔧 Advanced Scenario Example</h4>
                <div class="code-block">
Customer Support System:
1. Webhook receives ticket
2. Router checks priority:
   ├── High → Immediate SMS alert
   ├── Medium → Slack notification  
   └── Low → Add to queue
3. Data Store tracks response time
4. Aggregator creates weekly report
5. Auto-escalate if not resolved in 24h
                </div>
            </div>

            <h3>📊 Performance Optimization</h3>
            <ul>
                <li><strong>Batch Operations:</strong> รวมการประมวลผล</li>
                <li><strong>Conditional Execution:</strong> ทำงานเมื่อจำเป็น</li>
                <li><strong>Data Filtering:</strong> กรองข้อมูลก่อนประมวลผล</li>
                <li><strong>Cache Results:</strong> เก็บผลลัพธ์ที่ใช้บ่อย</li>
            </ul>

            <h3>🛡️ Error Recovery</h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <i class="fas fa-redo"></i>
                    <h4>Auto Retry</h4>
                    <p>ลองใหม่อัตโนมัติเมื่อเจอ Error</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-route"></i>
                    <h4>Fallback Routes</h4>
                    <p>เส้นทางสำรองเมื่อหลักไม่ได้</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-bell"></i>
                    <h4>Smart Alerts</h4>
                    <p>แจ้งเตือนเฉพาะ Error สำคัญ</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-database"></i>
                    <h4>Data Recovery</h4>
                    <p>กู้คืนข้อมูลที่สูญหาย</p>
                </div>
            </div>
        `
    },

    // Slide 13: Best Practices
    {
        id: 13,
        title: "✨ Best Practices",
        content: `
            <h2>🏆 Best Practices สำหรับ Make.com</h2>
            <p>เทคนิคและแนวทางปฏิบัติที่ดีที่สุดสำหรับการสร้าง Scenarios ที่มีประสิทธิภาพ</p>
            
            <h3>🎯 การออกแบบ Scenario</h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <i class="fas fa-sitemap"></i>
                    <h4>Keep It Simple</h4>
                    <p>เริ่มง่ายๆ แล้วค่อยเพิ่มความซับซ้อน</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-tag"></i>
                    <h4>Clear Naming</h4>
                    <p>ตั้งชื่อ Scenario และ Module ให้เข้าใจง่าย</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-sticky-note"></i>
                    <h4>Document Everything</h4>
                    <p>เพิ่ม Notes อธิบายการทำงาน</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-puzzle-piece"></i>
                    <h4>Modular Design</h4>
                    <p>แบ่งงานเป็นส่วนเล็กๆ</p>
                </div>
            </div>

            <h3>⚡ Performance Optimization</h3>
            
            <h4>🔍 Efficient Filtering</h4>
            <ul>
                <li>ใช้ Filter ให้ใกล้ต้นสาย Scenario</li>
                <li>กรองข้อมูลที่ไม่จำเป็นออก</li>
                <li>ใช้ Conditional Paths แทน Process ทุกอย่าง</li>
            </ul>

            <h4>📊 Batch Operations</h4>
            <ul>
                <li>รวมการประมวลผลให้มากที่สุด</li>
                <li>ใช้ Arrays แทนการทำงานทีละรายการ</li>
                <li>กำหนด Schedule ให้เหมาะสม</li>
            </ul>

            <div class="highlight-box">
                <h4>💡 Performance Tips</h4>
                <div class="code-block">
❌ ไม่ดี: ส่งอีเมลทีละฉบับ (100 Operations)
Gmail → Iterator → Individual Send × 100

✅ ดี: ส่งอีเมลเป็นกลุ่ม (1 Operation)  
Gmail → Aggregate Recipients → Bulk Send
                </div>
            </div>

            <h3>🔐 Security Best Practices</h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <i class="fas fa-key"></i>
                    <h4>API Key Management</h4>
                    <p>เก็บ API Keys อย่างปลอดภัย<br>
                    หมุนเวียน Keys เป็นระยะ</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-user-shield"></i>
                    <h4>Access Control</h4>
                    <p>ใช้สิทธิ์น้อยที่สุดที่จำเป็น<br>
                    แยก Production/Development</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-eye-slash"></i>
                    <h4>Data Privacy</h4>
                    <p>ไม่ log ข้อมูลส่วนตัว<br>
                    ใช้ Encryption เมื่อจำเป็น</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-shield-alt"></i>
                    <h4>Webhook Security</h4>
                    <p>ตรวจสอบ Signature<br>
                    ใช้ HTTPS เท่านั้น</p>
                </div>
            </div>

            <h3>📋 Testing & Debugging</h3>
            
            <h4>🧪 Testing Strategy</h4>
            <ol>
                <li><strong>Unit Testing:</strong> ทดสอบทีละ Module</li>
                <li><strong>Integration Testing:</strong> ทดสอบ Module ที่เชื่อมต่อกัน</li>
                <li><strong>End-to-end Testing:</strong> ทดสอบทั้ง Scenario</li>
                <li><strong>Load Testing:</strong> ทดสอบกับข้อมูลจำนวนมาก</li>
            </ol>

            <h4>🐛 Debugging Tips</h4>
            <ul>
                <li>ใช้ Debug mode ดูข้อมูลในแต่ละ step</li>
                <li>เพิ่ม temporary modules เพื่อ log ข้อมูล</li>
                <li>ใช้ Webhook.site ทดสอบ webhooks</li>
                <li>เก็บ Error logs สำหรับวิเคราะห์</li>
            </ul>

            <h3>📊 Monitoring & Maintenance</h3>
            
            <h4>👀 Monitoring</h4>
            <ul>
                <li><strong>Execution History:</strong> ตรวจสอบการทำงานเป็นประจำ</li>
                <li><strong>Error Rates:</strong> ติดตาม Error Rate</li>
                <li><strong>Performance:</strong> วัดเวลาการประมวลผล</li>
                <li><strong>Usage:</strong> ติดตาม Operations ที่ใช้</li>
            </ul>

            <h4>🔧 Maintenance</h4>
            <ul>
                <li>อัพเดท Scenarios เมื่อ APIs เปลี่ยน</li>
                <li>ทดสอบ Scenarios หลังจากอัพเดท</li>
                <li>ลบ Scenarios ที่ไม่ใช้แล้ว</li>
                <li>ปรับแต่ง Schedule ตามความจำเป็น</li>
            </ul>

            <h3>👥 Team Collaboration</h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <i class="fas fa-users"></i>
                    <h4>Team Management</h4>
                    <p>จัดการสิทธิ์ทีมงาน<br>
                    แยกบทบาทและหน้าที่</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-book"></i>
                    <h4>Documentation</h4>
                    <p>สร้างเอกสารการใช้งาน<br>
                    อธิบาย Business Logic</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-code-branch"></i>
                    <h4>Version Control</h4>
                    <p>ใช้ Scenario Templates<br>
                    สำรอง Scenarios สำคัญ</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-graduation-cap"></i>
                    <h4>Knowledge Sharing</h4>
                    <p>แชร์ความรู้และประสบการณ์<br>
                    สอนทีมงานใหม่</p>
                </div>
            </div>

            <div class="highlight-box">
                <h4>🎯 Golden Rules</h4>
                <ol>
                    <li><strong>Start Small:</strong> เริ่มจาก Scenario ง่ายๆ ก่อน</li>
                    <li><strong>Test Everything:</strong> ทดสอบก่อน Deploy ทุกครั้ง</li>
                    <li><strong>Monitor Always:</strong> ติดตามการทำงานอย่างสม่ำเสมอ</li>
                    <li><strong>Document Well:</strong> เขียนเอกสารให้ครบถ้วน</li>
                    <li><strong>Think Security:</strong> คิดถึงความปลอดภัยเสมอ</li>
                </ol>
            </div>
        `
    },

    // Slide 14: ตัวอย่างการใช้งานจริง
    {
        id: 14,
        title: "💼 ตัวอย่างการใช้งานจริง",
        content: `
            <h2>🌟 ตัวอย่างการใช้งาน Make.com ในชีวิตจริง</h2>
            <p>เรียนรู้จากตัวอย่าง Scenarios ที่ใช้งานได้จริงในองค์กรและชีวิตประจำวัน</p>
            
            <h3>🏢 Business Automation</h3>
            
            <h4>📧 Customer Onboarding</h4>
            <div class="highlight-box">
                <div class="code-block">
New Customer Registration:
1. Webhook จาก Website
2. สร้าง Contact ใน CRM  
3. ส่ง Welcome Email
4. เพิ่มใน Newsletter List
5. สร้าง Task สำหรับ Sales Team
6. ส่งการแจ้งเตือนไป Slack
                </div>
            </div>

            <h4>📊 Sales Report Automation</h4>
            <div class="highlight-box">
                <div class="code-block">
Daily Sales Summary:
1. Schedule Trigger (ทุกวัน 09:00)
2. ดึงข้อมูลจาก CRM API
3. คำนวณยอดขายรวม
4. สร้างกราฟใน Google Sheets  
5. ส่งรายงานทาง Email
6. Post สรุปใน Slack Channel
                </div>
            </div>

            <h3>🛒 E-commerce Scenarios</h3>
            
            <h4>📦 Order Processing</h4>
            <div class="feature-grid">
                <div class="feature-card">
                    <i class="fas fa-shopping-cart"></i>
                    <h4>New Order</h4>
                    <p>• Webhook จาก Shopify<br>
                    • Update Inventory<br>
                    • ส่ง Confirmation Email<br>
                    • สร้าง Shipping Label</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-truck"></i>
                    <h4>Shipping Update</h4>
                    <p>• Webhook จาก Courier<br>
                    • Update Order Status<br>
                    • ส่ง Tracking Info<br>
                    • SMS แจ้งลูกค้า</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-star"></i>
                    <h4>Review Request</h4>
                    <p>• Schedule หลัง Delivery<br>
                    • ตรวจสอบ Delivery Status<br>
                    • ส่ง Review Request<br>
                    • Follow-up หากไม่ตอบ</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-chart-line"></i>
                    <h4>Analytics</h4>
                    <p>• รวบรวมข้อมูลขาย<br>
                    • วิเคราะห์พฤติกรรม<br>
                    • สร้างรายงาน<br>
                    • ส่งให้ Management</p>
                </div>
            </div>

            <h3>📚 Education & Training</h3>
            
            <h4>🎓 Student Management</h4>
            <div class="highlight-box">
                <div class="code-block">
Online Course Automation:
1. Student Enrollment (Form Submit)
2. สร้าง Account ใน LMS
3. ส่ง Welcome Package  
4. เพิ่มใน Course Groups
5. Schedule Reminder Emails
6. Track Progress & Send Reports
                </div>
            </div>

            <h4>📝 Assignment Grading</h4>
            <div class="highlight-box">
                <div class="code-block">
Automated Grading System:
1. Watch Google Drive สำหรับ Submissions
2. Download และ Process Files
3. Run ผ่าน Grading API
4. Update Scores ใน Google Sheets
5. ส่ง Feedback Email ให้นักเรียน
6. แจ้งครูผู้สอนหากมีปัญหา
                </div>
            </div>

            <h3>💰 Finance & Accounting</h3>
            
            <h4>🧾 Invoice Processing</h4>
            <div class="feature-grid">
                <div class="feature-card">
                    <i class="fas fa-file-invoice"></i>
                    <h4>Invoice Creation</h4>
                    <p>สร้างใบแจ้งหนี้อัตโนมัติ<br>
                    จากข้อมูลใน CRM</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-credit-card"></i>
                    <h4>Payment Tracking</h4>
                    <p>ติดตามการชำระเงิน<br>
                    อัพเดทสถานะอัตโนมัติ</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-exclamation-triangle"></i>
                    <h4>Overdue Alerts</h4>
                    <p>แจ้งเตือนใบแจ้งหนี้ค้างชำระ<br>
                    ส่ง Reminder อัตโนมัติ</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-chart-pie"></i>
                    <h4>Financial Reports</h4>
                    <p>สร้างรายงานการเงิน<br>
                    แบบ Real-time</p>
                </div>
            </div>

            <h3>🏥 Healthcare & Wellness</h3>
            
            <h4>📅 Appointment Management</h4>
            <div class="highlight-box">
                <div class="code-block">
Patient Appointment System:
1. Online Booking Form
2. ตรวจสอบ Availability
3. สร้าง Appointment ใน Calendar
4. ส่ง Confirmation SMS/Email
5. Reminder 24 ชั่วโมงก่อน
6. Follow-up หลัง Appointment
                </div>
            </div>

            <h3>🏠 Smart Home & IoT</h3>
            
            <h4>🌡️ Environmental Control</h4>
            <div class="feature-grid">
                <div class="feature-card">
                    <i class="fas fa-thermometer-half"></i>
                    <h4>Temperature Monitor</h4>
                    <p>ติดตามอุณหภูมิ<br>
                    ปรับ AC อัตโนมัติ</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-lightbulb"></i>
                    <h4>Smart Lighting</h4>
                    <p>ควบคุมไฟตามเวลา<br>
                    และการเข้า-ออกบ้าน</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-shield-alt"></i>
                    <h4>Security Alerts</h4>
                    <p>แจ้งเตือนเมื่อมีการ<br>
                    เข้า-ออกผิดปกติ</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-bolt"></i>
                    <h4>Energy Monitoring</h4>
                    <p>ติดตามการใช้ไฟ<br>
                    ปรับแต่งเพื่อประหยัด</p>
                </div>
            </div>

            <h3>📱 Social Media Management</h3>
            
            <h4>📝 Content Publishing</h4>
            <div class="highlight-box">
                <div class="code-block">
Multi-Platform Posting:
1. สร้าง Content ใน Notion
2. Schedule การ Post
3. แปลงรูปแบบตาม Platform
4. Post ไป Facebook, Instagram, Twitter
5. ติดตาม Engagement
6. สร้างรายงาน Performance
                </div>
            </div>

            <div class="highlight-box">
                <h4>💡 Success Tips</h4>
                <ul>
                    <li><strong>เริ่มเล็ก:</strong> เลือก Process ง่ายๆ ที่ทำซ้ำบ่อย</li>
                    <li><strong>วัดผล:</strong> คำนวณเวลาและต้นทุนที่ประหยัดได้</li>
                    <li><strong>ปรับปรุง:</strong> ค่อยๆ เพิ่มฟีเจอร์และปรับแต่ง</li>
                    <li><strong>แชร์:</strong> สอนทีมงานและขยายผลไปยังงานอื่น</li>
                </ul>
            </div>
        `
    },

    // Slide 15: Troubleshooting
    {
        id: 15,
        title: "🔧 Troubleshooting",
        content: `
            <h2>🛠️ การแก้ไขปัญหาทั่วไป</h2>
            <p>เรียนรู้วิธีการแก้ไขปัญหาที่พบบ่อยใน Make.com และเทคนิคการ Debug</p>
            
            <h3>⚠️ ปัญหาที่พบบ่อย</h3>
            
            <h4>🔌 Connection Issues</h4>
            <div class="feature-grid">
                <div class="feature-card">
                    <i class="fas fa-times-circle" style="color: #ef4444;"></i>
                    <h4>Connection Failed</h4>
                    <p><strong>อาการ:</strong> ไม่สามารถเชื่อมต่อ App<br>
                    <strong>แก้ไข:</strong><br>
                    • ตรวจสอบ API Key/Token<br>
                    • Re-authorize Connection<br>
                    • ตรวจสอบสิทธิ์การเข้าถึง</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-clock" style="color: #f59e0b;"></i>
                    <h4>Token Expired</h4>
                    <p><strong>อาการ:</strong> ทำงานได้แล้วหยุด<br>
                    <strong>แก้ไข:</strong><br>
                    • Refresh Token<br>
                    • สร้าง Connection ใหม่<br>
                    • ตั้งค่า Auto-refresh</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-ban" style="color: #dc2626;"></i>
                    <h4>Permission Denied</h4>
                    <p><strong>อาการ:</strong> ไม่มีสิทธิ์เข้าถึง<br>
                    <strong>แก้ไข:</strong><br>
                    • เพิ่ม Scope ที่จำเป็น<br>
                    • ขอสิทธิ์จาก Admin<br>
                    • ใช้ Account ที่ถูกต้อง</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-network-wired" style="color: #6b7280;"></i>
                    <h4>API Rate Limit</h4>
                    <p><strong>อาการ:</strong> ถูกปฏิเสธเพราะเรียกบ่อย<br>
                    <strong>แก้ไข:</strong><br>
                    • ลด Frequency<br>
                    • ใช้ Batch Operations<br>
                    • เพิ่ม Delay</p>
                </div>
            </div>

            <h3>📊 Data Issues</h3>
            
            <h4>🗂️ Data Mapping Problems</h4>
            <div class="highlight-box">
                <h4>❌ ปัญหาที่พบบ่อย:</h4>
                <ul>
                    <li><strong>Field ไม่ตรงกัน:</strong> ข้อมูลจาก API เปลี่ยนโครงสร้าง</li>
                    <li><strong>Data Type ผิด:</strong> String vs Number vs Date</li>
                    <li><strong>Null Values:</strong> ข้อมูลว่างทำให้ Error</li>
                    <li><strong>Array Handling:</strong> ประมวลผลข้อมูลแบบ Array ไม่ถูก</li>
                </ul>
                
                <h4>✅ วิธีแก้ไข:</h4>
                <ul>
                    <li>ใช้ <strong>Data Inspector</strong> ดูโครงสร้างข้อมูลจริง</li>
                    <li>เพิ่ม <strong>Default Values</strong> สำหรับ Null Fields</li>
                    <li>ใช้ <strong>Functions</strong> แปลง Data Type</li>
                    <li>ใช้ <strong>Iterator</strong> สำหรับ Arrays</li>
                </ul>
            </div>

            <h4>🔍 การ Debug Data</h4>
            <div class="code-block">
Debug Steps:
1. ดู Raw Data จาก Source
2. ตรวจสอบ Data Structure  
3. ใช้ Text Mode ดู Mapping
4. ทดสอบทีละ Field
5. เพิ่ม Temporary Output Module
            </div>

            <h3>⚡ Performance Issues</h3>
            
            <h4>🐌 Scenario ช้า</h4>
            <div class="feature-grid">
                <div class="feature-card">
                    <i class="fas fa-hourglass-half"></i>
                    <h4>Timeout</h4>
                    <p><strong>สาเหตุ:</strong> ประมวลผลนานเกิน 40 วินาที<br>
                    <strong>แก้ไข:</strong> แบ่งงานเป็นส่วนย่อย</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-database"></i>
                    <h4>Large Dataset</h4>
                    <p><strong>สาเหตุ:</strong> ข้อมูลมากเกินไป<br>
                    <strong>แก้ไข:</strong> ใช้ Pagination หรือ Filter</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-sync"></i>
                    <h4>Too Many API Calls</h4>
                    <p><strong>สาเหตุ:</strong> เรียก API บ่อยเกินไป<br>
                    <strong>แก้ไข:</strong> ใช้ Batch Operations</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-memory"></i>
                    <h4>Memory Issues</h4>
                    <p><strong>สาเหตุ:</strong> ใช้ Memory มากเกินไป<br>
                    <strong>แก้ไข:</strong> Process ทีละชุดเล็กๆ</p>
                </div>
            </div>

            <h3>🔄 Scenario Not Running</h3>
            
            <h4>📋 Troubleshooting Checklist</h4>
            <ol>
                <li><strong>✅ Scenario Status:</strong> ตรวจสอบว่า Scenario เปิดใช้งาน</li>
                <li><strong>🔍 Trigger Settings:</strong> ตรวจสอบการตั้งค่า Trigger</li>
                <li><strong>📊 Execution History:</strong> ดู Log การทำงาน</li>
                <li><strong>🔗 Connections:</strong> ตรวจสอบ Connection Status</li>
                <li><strong>⚙️ Filters:</strong> ตรวจสอบเงื่อนไข Filter</li>
                <li><strong>💾 Data Source:</strong> ตรวจสอบว่ามีข้อมูลใหม่</li>
            </ol>

            <h3>🚨 Error Diagnosis</h3>
            
            <h4>📋 Error Types</h4>
            <div class="highlight-box">
                <h4>🔴 Critical Errors (หยุดการทำงาน)</h4>
                <ul>
                    <li><strong>Connection Error:</strong> ไม่สามารถเชื่อมต่อ</li>
                    <li><strong>Authentication Error:</strong> การยืนยันตัวตนล้มเหลว</li>
                    <li><strong>Module Configuration Error:</strong> ตั้งค่า Module ผิด</li>
                </ul>
                
                <h4>🟡 Warning Errors (ทำงานต่อได้)</h4>
                <ul>
                    <li><strong>Data Validation Warning:</strong> ข้อมูลไม่ครบถ้วน</li>
                    <li><strong>Rate Limit Warning:</strong> ใกล้ถึงขีดจำกัด</li>
                    <li><strong>Partial Success:</strong> ทำงานได้บางส่วน</li>
                </ul>
            </div>

            <h3>🛠️ Debug Tools</h3>
            
            <h4>🔧 Built-in Tools</h4>
            <ul>
                <li><strong>Run Once:</strong> ทดสอบทั้ง Scenario</li>
                <li><strong>Run from Here:</strong> ทดสอบจาก Module ที่เลือก</li>
                <li><strong>Data Inspector:</strong> ดูข้อมูลในแต่ละ Step</li>
                <li><strong>Execution History:</strong> ดู Log การทำงาน</li>
            </ul>

            <h4>🌐 External Tools</h4>
            <ul>
                <li><strong>Webhook.site:</strong> ทดสอบ Webhooks</li>
                <li><strong>Postman:</strong> ทดสอบ API calls</li>
                <li><strong>JSON Formatter:</strong> ดู JSON structure</li>
                <li><strong>ngrok:</strong> ทดสอบ Local endpoints</li>
            </ul>

            <div class="highlight-box">
                <h4>💡 Debug Strategy</h4>
                <ol>
                    <li><strong>Isolate the Problem:</strong> หาจุดที่เกิดปัญหา</li>
                    <li><strong>Check Recent Changes:</strong> ดูว่ามีการเปลี่ยนแปลงอะไร</li>
                    <li><strong>Test with Known Data:</strong> ใช้ข้อมูลที่รู้ผลลัพธ์</li>
                    <li><strong>Simplify:</strong> ลบส่วนที่ไม่จำเป็นออกชั่วคราว</li>
                    <li><strong>Document:</strong> บันทึกปัญหาและวิธีแก้</li>
                </ol>
            </div>

            <h3>📞 Getting Help</h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <i class="fas fa-book"></i>
                    <h4>Documentation</h4>
                    <p>อ่าน Make.com Docs<br>
                    สำหรับ App ที่ใช้</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-users"></i>
                    <h4>Community</h4>
                    <p>ถามใน Make.com<br>
                    Community Forum</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-headset"></i>
                    <h4>Support</h4>
                    <p>ติดต่อ Make.com<br>
                    Support Team</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-video"></i>
                    <h4>Tutorials</h4>
                    <p>ดู YouTube tutorials<br>
                    และ Webinars</p>
                </div>
            </div>
        `
    },

    // Slide 16: Security & Privacy
    {
        id: 16,
        title: "🔐 Security & Privacy",
        content: `
            <h2>🛡️ ความปลอดภัยและการปกป้องข้อมูล</h2>
            <p>เรียนรู้วิธีการใช้ Make.com อย่างปลอดภัยและปกป้องข้อมูลสำคัญ</p>
            
            <h3>🔐 การจัดการ Authentication</h3>
            
            <h4>🔑 Types of Authentication</h4>
            <div class="feature-grid">
                <div class="feature-card">
                    <i class="fas fa-key" style="color: #10b981;"></i>
                    <h4>OAuth 2.0</h4>
                    <p><strong>ปลอดภัยที่สุด</strong><br>
                    • ไม่ต้องแชร์ Password<br>
                    • Scope จำกัดสิทธิ์<br>
                    • Revoke ได้ง่าย</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-code" style="color: #f59e0b;"></i>
                    <h4>API Key</h4>
                    <p><strong>ใช้งานง่าย</strong><br>
                    • เก็บ Key ให้ปลอดภัย<br>
                    • Rotate เป็นระยะ<br>
                    • จำกัด Scope</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-user-circle" style="color: #ef4444;"></i>
                    <h4>Basic Auth</h4>
                    <p><strong>ความเสี่ยงสูง</strong><br>
                    • หลีกเลี่ยงเมื่อเป็นไปได้<br>
                    • ใช้ HTTPS เท่านั้น<br>
                    • เปลี่ยน Password บ่อย</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-certificate" style="color: #8b5cf6;"></i>
                    <h4>Custom Auth</h4>
                    <p><strong>ขึ้นกับระบบ</strong><br>
                    • อ่าน Documentation<br>
                    • ตรวจสอบ Security<br>
                    • Test การใช้งาน</p>
                </div>
            </div>

            <h3>🔒 Best Practices for API Keys</h3>
            
            <div class="highlight-box">
                <h4>✅ Do's</h4>
                <ul>
                    <li><strong>ใช้ Environment Variables:</strong> ไม่ Hard-code ใน Code</li>
                    <li><strong>Rotate Keys ตามกำหนด:</strong> เปลี่ยน API Keys เป็นระยะ</li>
                    <li><strong>จำกัด Scope:</strong> ให้สิทธิ์เฉพาะที่จำเป็น</li>
                    <li><strong>Monitor Usage:</strong> ติดตามการใช้งานผิดปกติ</li>
                    <li><strong>Backup Keys:</strong> เก็บ Keys สำรองไว้</li>
                </ul>
                
                <h4>❌ Don'ts</h4>
                <ul>
                    <li><strong>แชร์ Keys:</strong> ไม่แชร์ API Keys ให้คนอื่น</li>
                    <li><strong>เก็บใน Code:</strong> ไม่ใส่ Keys ใน Source Code</li>
                    <li><strong>ใช้ Production Keys ใน Test:</strong> แยก Environment</li>
                    <li><strong>ใช้ Admin Keys:</strong> ไม่ใช้ Super Admin Keys</li>
                </ul>
            </div>

            <h3>🛡️ Data Protection</h3>
            
            <h4>📊 Data Classification</h4>
            <div class="feature-grid">
                <div class="feature-card">
                    <i class="fas fa-unlock" style="color: #10b981;"></i>
                    <h4>Public Data</h4>
                    <p>ข้อมูลทั่วไป<br>
                    สามารถเผยแพร่ได้</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-eye" style="color: #f59e0b;"></i>
                    <h4>Internal Data</h4>
                    <p>ข้อมูลภายในองค์กร<br>
                    จำกัดการเข้าถึง</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-user-secret" style="color: #ef4444;"></i>
                    <h4>Sensitive Data</h4>
                    <p>ข้อมูลส่วนตัว<br>
                    ต้องเข้ารหัส</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-shield-alt" style="color: #dc2626;"></i>
                    <h4>Confidential Data</h4>
                    <p>ข้อมูลลับสุด<br>
                    ความปลอดภัยสูงสุด</p>
                </div>
            </div>

            <h4>🔐 Data Encryption</h4>
            <ul>
                <li><strong>Encryption at Rest:</strong> เข้ารหัสข้อมูลที่เก็บ</li>
                <li><strong>Encryption in Transit:</strong> ใช้ HTTPS/TLS</li>
                <li><strong>End-to-End Encryption:</strong> เข้ารหัสตลอดทาง</li>
                <li><strong>Key Management:</strong> จัดการ Encryption Keys</li>
            </ul>

            <h3>🏢 Compliance & Regulations</h3>
            
            <h4>📋 GDPR Compliance</h4>
            <div class="highlight-box">
                <h4>🇪🇺 GDPR Requirements</h4>
                <ul>
                    <li><strong>Data Minimization:</strong> เก็บข้อมูลเฉพาะที่จำเป็น</li>
                    <li><strong>Consent Management:</strong> ขอความยินยอม</li>
                    <li><strong>Right to Erasure:</strong> ลบข้อมูลเมื่อขอ</li>
                    <li><strong>Data Portability:</strong> ส่งออกข้อมูลได้</li>
                    <li><strong>Breach Notification:</strong> แจ้งเหตุการณ์รั่วไหล</li>
                </ul>
            </div>

            <h4>🏥 HIPAA (Healthcare)</h4>
            <ul>
                <li>เข้ารหัสข้อมูลสุขภาพ</li>
                <li>จำกัดการเข้าถึง</li>
                <li>Audit Trail ที่ครบถ้วน</li>
                <li>Business Associate Agreements</li>
            </ul>

            <h3>🔍 Security Monitoring</h3>
            
            <h4>👀 การติดตาม</h4>
            <div class="feature-grid">
                <div class="feature-card">
                    <i class="fas fa-history"></i>
                    <h4>Access Logs</h4>
                    <p>บันทึกการเข้าถึง<br>
                    ระบบทั้งหมด</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-exclamation-triangle"></i>
                    <h4>Anomaly Detection</h4>
                    <p>ตรวจจับพฤติกรรม<br>
                    ผิดปกติ</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-bell"></i>
                    <h4>Real-time Alerts</h4>
                    <p>แจ้งเตือนทันที<br>
                    เมื่อมีปัญหา</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-chart-line"></i>
                    <h4>Security Dashboard</h4>
                    <p>ภาพรวมความ<br>
                    ปลอดภัย</p>
                </div>
            </div>

            <h3>🚨 Incident Response</h3>
            
            <h4>📋 Security Incident Plan</h4>
            <ol>
                <li><strong>Detection:</strong> ตรวจพบปัญหา</li>
                <li><strong>Assessment:</strong> ประเมินความรุนแรง</li>
                <li><strong>Containment:</strong> ควบคุมไม่ให้แพร่กระจาย</li>
                <li><strong>Investigation:</strong> ตรวจสอบสาเหตุ</li>
                <li><strong>Recovery:</strong> กู้คืนระบบ</li>
                <li><strong>Lessons Learned:</strong> ปรับปรุงมาตรการ</li>
            </ol>

            <h3>👥 Team Security</h3>
            
            <h4>🔐 Access Management</h4>
            <div class="highlight-box">
                <h4>🎯 Principle of Least Privilege</h4>
                <ul>
                    <li>ให้สิทธิ์เฉพาะที่จำเป็น</li>
                    <li>Review สิทธิ์เป็นระยะ</li>
                    <li>Revoke สิทธิ์เมื่อไม่ใช้</li>
                    <li>ใช้ Role-based Access</li>
                </ul>
            </div>

            <h4>📚 Security Training</h4>
            <ul>
                <li><strong>Security Awareness:</strong> อบรมความรู้ความปลอดภัย</li>
                <li><strong>Phishing Protection:</strong> การป้องกัน Phishing</li>
                <li><strong>Password Management:</strong> การจัดการรหัสผ่าน</li>
                <li><strong>Incident Reporting:</strong> การรายงานเหตุการณ์</li>
            </ul>

            <h3>🔧 Make.com Security Features</h3>
            
            <div class="feature-grid">
                <div class="feature-card">
                    <i class="fas fa-shield-alt"></i>
                    <h4>SOC 2 Compliance</h4>
                    <p>Make.com ผ่านมาตรฐาน<br>
                    SOC 2 Type II</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-lock"></i>
                    <h4>Data Encryption</h4>
                    <p>เข้ารหัสข้อมูล<br>
                    ทั้งหมด</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-user-shield"></i>
                    <h4>2FA Support</h4>
                    <p>รองรับการยืนยัน<br>
                    แบบ 2 ขั้นตอน</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-globe"></i>
                    <h4>GDPR Ready</h4>
                    <p>เตรียมพร้อมสำหรับ<br>
                    GDPR</p>
                </div>
            </div>

            <div class="highlight-box">
                <h4>🎯 Security Checklist</h4>
                <ol>
                    <li>✅ ใช้ Strong Authentication</li>
                    <li>✅ Enable 2FA</li>
                    <li>✅ Regular Security Reviews</li>
                    <li>✅ Monitor Access Logs</li>
                    <li>✅ Encrypt Sensitive Data</li>
                    <li>✅ Regular Backups</li>
                    <li>✅ Incident Response Plan</li>
                    <li>✅ Team Security Training</li>
                </ol>
            </div>
        `
    },

    // Quiz Slide
    {
        id: 18,
        title: "📊 Quiz ท้ายบทเรียน",
        content: `
            <h2>🧠 ทดสอบความรู้</h2>
            <p>มาทดสอบความรู้ที่ได้เรียนมาเกี่ยวกับ Make.com กันเถอะ!</p>
            
            <div class="quiz-container">
                <div class="quiz-question">
                    คำถามที่ 1: Make.com เดิมชื่อว่าอะไร?
                </div>
                <div class="quiz-options">
                    <div class="quiz-option" data-answer="correct" data-question="1">
                        A) Integromat
                    </div>
                    <div class="quiz-option" data-answer="wrong" data-question="1">
                        B) Zapier
                    </div>
                    <div class="quiz-option" data-answer="wrong" data-question="1">
                        C) IFTTT
                    </div>
                    <div class="quiz-option" data-answer="wrong" data-question="1">
                        D) Automate.io
                    </div>
                </div>
                <div class="quiz-result" id="quiz-result-1">
                    <strong>ถูกต้อง!</strong> Make.com เดิมชื่อ Integromat ก่อนจะเปลี่ยนชื่อในปี 2021
                </div>
            </div>

            <div class="quiz-container" style="margin-top: 2rem;">
                <div class="quiz-question">
                    คำถามที่ 2: Free Plan ของ Make.com มี Operations กี่ครั้งต่อเดือน?
                </div>
                <div class="quiz-options">
                    <div class="quiz-option" data-answer="wrong" data-question="2">
                        A) 500 Operations
                    </div>
                    <div class="quiz-option" data-answer="correct" data-question="2">
                        B) 1,000 Operations
                    </div>
                    <div class="quiz-option" data-answer="wrong" data-question="2">
                        C) 2,000 Operations
                    </div>
                    <div class="quiz-option" data-answer="wrong" data-question="2">
                        D) 5,000 Operations
                    </div>
                </div>
                <div class="quiz-result" id="quiz-result-2">
                    <strong>ถูกต้อง!</strong> Free Plan มี 1,000 Operations ต่อเดือน เพียงพอสำหรับการเริ่มต้นใช้งาน
                </div>
            </div>

            <div class="quiz-container" style="margin-top: 2rem;">
                <div class="quiz-question">
                    คำถามที่ 3: Module ประเภทใดที่ใช้เริ่มต้น Scenario?
                </div>
                <div class="quiz-options">
                    <div class="quiz-option" data-answer="correct" data-question="3">
                        A) Trigger
                    </div>
                    <div class="quiz-option" data-answer="wrong" data-question="3">
                        B) Action
                    </div>
                    <div class="quiz-option" data-answer="wrong" data-question="3">
                        C) Search
                    </div>
                    <div class="quiz-option" data-answer="wrong" data-question="3">
                        D) Iterator
                    </div>
                </div>
                <div class="quiz-result" id="quiz-result-3">
                    <strong>ถูกต้อง!</strong> Trigger Module ใช้เริ่มต้น Scenario เมื่อมีเหตุการณ์เกิดขึ้น
                </div>
            </div>

            <div class="quiz-container" style="margin-top: 2rem;">
                <div class="quiz-question">
                    คำถามที่ 4: OAuth 2.0 ใช้กับ App ใดบ้าง?
                </div>
                <div class="quiz-options">
                    <div class="quiz-option" data-answer="correct" data-question="4">
                        A) Google และ Facebook
                    </div>
                    <div class="quiz-option" data-answer="wrong" data-question="4">
                        B) Airtable และ Notion
                    </div>
                    <div class="quiz-option" data-answer="wrong" data-question="4">
                        C) Webhook และ HTTP
                    </div>
                    <div class="quiz-option" data-answer="wrong" data-question="4">
                        D) CSV และ JSON
                    </div>
                </div>
                <div class="quiz-result" id="quiz-result-4">
                    <strong>ถูกต้อง!</strong> OAuth 2.0 ใช้กับ Apps ใหญ่ๆ เช่น Google, Facebook, Microsoft
                </div>
            </div>

            <div class="quiz-container" style="margin-top: 2rem;">
                <div class="quiz-question">
                    คำถามที่ 5: ฟังก์ชัน formatDate() ใช้ทำอะไร?
                </div>
                <div class="quiz-options">
                    <div class="quiz-option" data-answer="wrong" data-question="5">
                        A) เพิ่มวันที่
                    </div>
                    <div class="quiz-option" data-answer="correct" data-question="5">
                        B) จัดรูปแบบการแสดงวันที่
                    </div>
                    <div class="quiz-option" data-answer="wrong" data-question="5">
                        C) ลบวันที่
                    </div>
                    <div class="quiz-option" data-answer="wrong" data-question="5">
                        D) ค้นหาวันที่
                    </div>
                </div>
                <div class="quiz-result" id="quiz-result-5">
                    <strong>ถูกต้อง!</strong> formatDate() ใช้จัดรูปแบบการแสดงวันที่ เช่น DD/MM/YYYY
                </div>
            </div>
        `
    },

    // Slide 19: สรุปและขั้นตอนถัดไป
    {
        id: 19,
        title: "🎉 สรุปและขั้นตอนถัดไป",
        content: `
            <h1>🎓 ยินดีด้วย! คุณผ่านหลักสูตร Make.com แล้ว</h1>
            
            <h2>📚 สิ่งที่คุณได้เรียนรู้</h2>
            <div class="feature-grid">
                <div class="feature-card">
                    <i class="fas fa-star"></i>
                    <h4>พื้นฐาน Make.com</h4>
                    <p>เข้าใจหลักการและส่วนประกอบของระบบ</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-cogs"></i>
                    <h4>การสร้าง Scenarios</h4>
                    <p>สามารถสร้างระบบอัตโนมัติได้ด้วยตนเอง</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-link"></i>
                    <h4>การเชื่อมต่อ Apps</h4>
                    <p>เชื่อมต่อและใช้งาน Apps ต่างๆ ได้</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-map"></i>
                    <h4>Data Mapping</h4>
                    <p>จัดการและแปลงข้อมูลระหว่าง Apps</p>
                </div>
            </div>

            <h2>🚀 ขั้นตอนถัดไป</h2>
            
            <h3>1. 🛠️ ฝึกฝนสร้าง Scenarios</h3>
            <ul>
                <li>เริ่มจาก Scenarios ง่ายๆ ในชีวิตประจำวัน</li>
                <li>ลองใช้ Apps ที่คุณใช้ประจำ</li>
                <li>ทดลองสร้าง Scenario ใหม่ทุกสัปดาห์</li>
            </ul>

            <h3>2. 📖 เรียนรู้เพิ่มเติม</h3>
            <ul>
                <li><strong>Make Academy:</strong> หลักสูตรฟรีจาก Make.com</li>
                <li><strong>Community Forum:</strong> ถามคำถามและแชร์ประสบการณ์</li>
                <li><strong>YouTube:</strong> ติดตาม Make.com Official Channel</li>
                <li><strong>Documentation:</strong> อ่าน Docs สำหรับ Apps ที่ใช้</li>
            </ul>

            <h3>3. 💼 นำไปใช้งานจริง</h3>
            <ul>
                <li>ระบุงานที่ทำซ้ำๆ ในองค์กร</li>
                <li>สร้าง Scenarios เพื่อประหยัดเวลา</li>
                <li>วัดผลการใช้งานและปรับปรุง</li>
                <li>แชร์ความรู้ให้ทีมงาน</li>
            </ul>

            <div class="highlight-box">
                <h4>🎯 เป้าหมายหลังเรียนจบ</h4>
                <ul>
                    <li>สร้าง 5 Scenarios ที่ใช้งานจริงภายใน 1 เดือน</li>
                    <li>ประหยัดเวลาได้อย่างน้อย 2 ชั่วโมงต่อสัปดาห์</li>
                    <li>แก้ปัญหา Error และ Debug Scenarios ได้ด้วยตนเอง</li>
                    <li>สอนเพื่อนร่วมงานใช้ Make.com ได้</li>
                </ul>
            </div>

            <h2>🌟 ไอเดีย Scenarios สำหรับเริ่มต้น</h2>
            <div class="feature-grid">
                <div class="feature-card">
                    <i class="fas fa-envelope"></i>
                    <h4>Email Automation</h4>
                    <p>ส่งอีเมลตอบกลับอัตโนมัติ หรือส่งรายงานประจำวัน</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-calendar"></i>
                    <h4>Calendar Sync</h4>
                    <p>ซิงค์ข้อมูลระหว่าง Google Calendar และ Notion</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-chart-bar"></i>
                    <h4>Report Generation</h4>
                    <p>สร้างรายงานอัตโนมัติจากข้อมูลใน Google Sheets</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-bell"></i>
                    <h4>Notifications</h4>
                    <p>ส่งแจ้งเตือนไป Slack เมื่อมีเหตุการณ์สำคัญ</p>
                </div>
            </div>

            <div style="text-align: center; margin-top: 3rem; padding: 2rem; background: linear-gradient(135deg, var(--make-orange), var(--make-purple)); border-radius: 16px; color: white;">
                <h2>🎉 ขอบคุณที่เรียนจบหลักสูตร!</h2>
                <p style="font-size: 1.2rem; margin: 1rem 0;">พร้อมไปสร้างระบบอัตโนมัติที่น่าทึ่งด้วย Make.com แล้ว!</p>
                <p>หากมีคำถาม สามารถติดต่อกลับมาได้เสมอ</p>
            </div>
        `
    }
];

// Export for use in main file
if (typeof module !== 'undefined' && module.exports) {
    module.exports = slidesData;
}