// Type definitions for the student data
// Feel free to modify or extend these as needed

export interface Student {
  id: string;
  email: string;
  full_name: string;
  first_name: string;
  last_name: string;
  coach: string;
  date_joined: string;
  date_ended: string;
  student_active: string;
  student_program: string;
  // ... other fields in data/students.json
}

export interface CourseProgress {
  user_email: string;
  course_name: string;
  modules_completed: number;
  modules_total: number;
  completion_percentage: number;
  last_activity: string;
  enrolled_date: string;
}

export interface Payment {
  customer_email: string;
  amount_cents: number;
  currency: string;
  created_at: string;
  status: string;
  description: string;
}

// You'll likely want to create a unified type like this:
export interface UnifiedStudentProfile {
  // TODO: Define your unified profile structure
}
