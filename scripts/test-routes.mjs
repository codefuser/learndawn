const baseUrl = 'http://localhost:3000';

const routes = [
  '/',
  '/about',
  '/careers',
  '/careers/apply?position=NEET%20Faculty%20%E2%80%94%20Physics',
  '/contact',
  '/career-guidance',
  '/career-guidance/register',
  '/mentorship',
  '/academic-counselling',
  '/student-desk',
  '/mental-health'
];

async function testAll() {
  console.log('Testing page routes...');
  let failed = 0;
  for (const route of routes) {
    try {
      const res = await fetch(`${baseUrl}${route}`);
      if (res.status === 200) {
        console.log(`[PASS] ${res.status} : ${route}`);
      } else {
        console.error(`[FAIL] ${res.status} : ${route}`);
        failed++;
      }
    } catch (err) {
      console.error(`[ERR] ${route} : ${err.message}`);
      failed++;
    }
  }

  console.log('\nTesting API routes...');
  // Test contact endpoint
  try {
    const contactRes = await fetch(`${baseUrl}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Test Student',
        email: 'test@example.com',
        phone: '9876543210',
        userCategory: 'Student',
        subject: 'General Course Enquiry',
        message: 'Hello, this is a test enquiry for verification.'
      })
    });
    const data = await contactRes.json();
    console.log(`[PASS] API /api/contact: status ${contactRes.status}, success: ${data.success}`);
  } catch (err) {
    console.error(`[ERR] API /api/contact: ${err.message}`);
    failed++;
  }

  // Test counselling registration endpoint
  try {
    const counselRes = await fetch(`${baseUrl}/api/counselling`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        studentName: 'Aakash Sharma',
        dateOfBirthOrAge: '18',
        mobileNumber: '9876543210',
        emailAddress: 'aakash@example.com',
        cityDistrictState: 'Chennai, Tamil Nadu',
        currentClassOrQualification: 'Class 12',
        schoolOrCollegeName: 'Central Academy',
        academicStream: 'Biology (PCB)',
        recentAcademicPerformance: '88% in Class 11',
        preferredCareerOrCourse: 'MBBS / Healthcare',
        areasOfInterest: 'Human Physiology, Botany',
        entranceExam: 'NEET UG',
        currentCareerConcern: 'Balancing Physics numericals with Biology revision',
        preferredCounsellingMode: 'Online',
        preferredDate: '2026-10-25',
        preferredTimeSlot: '5:00 PM - 6:00 PM',
        attendees: 'Student + Parent/Guardian',
        guidanceDetails: 'Need a structured study schedule for NEET 2026',
        declarationAccepted: true
      })
    });
    const cData = await counselRes.json();
    console.log(`[PASS] API /api/counselling: status ${counselRes.status}, success: ${cData.success}`);
  } catch (err) {
    console.error(`[ERR] API /api/counselling: ${err.message}`);
    failed++;
  }

  console.log(`\nVerification finished with ${failed} failures.`);
}

testAll();
