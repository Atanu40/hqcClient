export interface Admission {
  id?: number;
  patientId?: number | null;
  ipdNo: string;
  admissionDateTime: Date | string;
  arrivalDateTime: Date;
  initialAssessmentDateTime: Date;
  ward: string;
  room: string;
  bed: string;
  consultingDoctorId?: number;
  insuranceCategoryId: number;
  departmentId: number;
  dischargeAdviceDateTime?: Date;
  actualDischargeDateTime?: Date;
  saps?: number;
  isDeceased: boolean;
  deceasedDateTime?: Date;
  createdAt: Date;
  modifiedAt: Date;
}
