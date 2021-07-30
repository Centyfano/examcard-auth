export interface Student {
  name: string;
  regNumber: string;
  school: string;
  course: string;
  year: number;
  semester: number;
  units: Array<{ code: string; name: string }>;
  examinationId: string;
  academicYear: string;
  startDate: string;
  endDate: string;
  examCardId: string;
  qrcode: string;
}

