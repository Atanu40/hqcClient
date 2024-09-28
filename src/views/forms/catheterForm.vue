<script setup>
import { ref, onMounted } from "vue";
import { ElMessage } from "element-plus";
import { useBreadcrumbStore } from "@/store/breadcrumb";

const breadCrumbStore = useBreadcrumbStore();

const formRef = ref();

const form = ref({
  facilityId: "",
  event: "",
  patientId: "",
  socialSecurity: "",
  secondaryId: "",
  medicare: "",
  firstName: "",
  lastName: "",
  gender: "",
  dateOfBirth: "",
  ethnicity: "",
  race: "",
  eventType: "",
  dateOfEvent: "",
  postProcedureUTI: false,
  dateOfProcedure: "",
  nhsnProcedureCode: "",
  icd10PCSOrCptProcedureCode: "",
  mdroInfectionSurveillance: [],
  dateAdmittedToFacility: "",
  location: "",
  urinaryCatheterStatus: [],
  locationOfDeviceInsertion: "",
  dateOfDeviceInsertion: "",
  birthWeight: "",
  specificEvent: [],
  specifyCriteriaUsed: {
    anyPatient: [],
    moreThanOneYear: [],
    laboratoryDiagnosticTesting: [],
  },
  secondaryBloodstreamInfection: false,
});

const dateOfDeviceInsertion = ref("");
const dateOfDeviceRemoval = ref("");
const locationOfDeviceInsertion = ref("");
const urinaryCatheterStatus = ref("");
const specificEvent = ref("");
const specificCriteria = ref([]);
const secondaryBloodstreamInfection = ref("");
const covid19 = ref("");
const died = ref("");
const utiContributedToDeath = ref("");
const pathogensIdentified = ref("");
const pathogenDetails = ref("");

const submitForm = () => {
  ElMessage.success("Form submitted successfully");
  console.log("Form submitted:", {
    dateOfDeviceInsertion,
    dateOfDeviceRemoval,
    locationOfDeviceInsertion,
    urinaryCatheterStatus,
    specificEvent,
    specificCriteria,
    secondaryBloodstreamInfection,
    covid19,
    died,
    utiContributedToDeath,
    pathogensIdentified,
    pathogenDetails,
  });
};
onMounted(() => {
  breadCrumbStore.setBreadcrumb([
    { name: "Dashboard", path: "/" },
    { name: "Catheter Form", path: "/data-entry/catheter-form" },
  ]);
});
</script>

<template>
  <div class="bg-white frm-container">
    <h2>Catheter Associated Urinary Tract Infection (CAUTI)</h2>

    <el-form @submit.prevent="submitForm" class="border p-5">
      <!-- Section 1: Primary Details -->
      <el-row :gutter="20">
        <el-col :span="12" class="">
          <!-- <el-form-item label="Date of Device Insertion:">
            <el-date-picker
              v-model="dateOfDeviceInsertion"
              type="date"
              placeholder="Select date"
            ></el-date-picker> -->
          <!-- form.facilityId -->
          <el-form-item label="Facility ID:">
            <el-input
              v-model="form.facilityId"
              placeholder="Enter facility ID"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Event:">
            <el-input v-model="form.event" placeholder="Enter event" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Patient ID:">
            <el-input v-model="form.patientId" placeholder="Enter patient ID" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Social Security:">
            <el-input
              v-model="form.socialSecurity"
              placeholder="Enter social security"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Secondary ID:">
            <el-input
              v-model="form.secondaryId"
              placeholder="Enter secondary ID"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Medicare:">
            <el-input v-model="form.medicare" placeholder="Enter medicare" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="First Name:">
            <el-input v-model="form.firstName" placeholder="Enter first name" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Last Name:">
            <el-input v-model="form.lastName" placeholder="Enter last name" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Gender:">
            <el-select
              v-model="form.gender"
              placeholder="Select gender"
              style="width: 100%"
            >
              <el-option label="Male" value="Male" />
              <el-option label="Female" value="Female" />
              <el-option label="Other" value="Other" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Age:">
            <el-input v-model="form.age" placeholder="Enter age" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Date of Birth:">
            <el-date-picker
              v-model="form.dateOfBirth"
              type="date"
              placeholder="Select date"
              style="width: 100%"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Race:">
            <el-input v-model="form.race" placeholder="Enter race" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Event Type:">
            <el-input v-model="form.eventType" placeholder="Enter event type" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Date of Event:">
            <el-date-picker
              v-model="form.dateOfEvent"
              type="date"
              placeholder="Select date"
              style="width: 100%"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Post Procedure UTI:">
            <el-checkbox-group v-model="form.postProcedureUTI">
              <el-checkbox label="Yes" name="postProcedureUTI"></el-checkbox>
              <el-checkbox label="No" name="postProcedureUTI"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Date Of Procedure">
            <el-date-picker
              v-model="form.dateOfProcedure"
              type="date"
              placeholder="Select date"
              style="width: 100%"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="NHSN Procedure Code">
            <el-input v-model="form.nhsnProcedureCode" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="ICD-10-PCS or CPT Procedure Code">
            <el-input
              v-model="form.icd10PCSOrCptProcedureCode"
              placeholder="Enter ICD-10-PCS or CPT Procedure Code"
            />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item
            label="MDRO Infection Surveillance:"
            label-position="top"
          >
            <el-checkbox-group v-model="form.mdroInfectionSurveillance">
              <el-checkbox
                label="Yes, this infection's pathogen & location are in-plan for Infection Surveillance in the MDRO/CDI Module"
                name="mdroInfectionSurveillance"
              ></el-checkbox>
              <el-checkbox
                label="No, this infection's pathogen & location are not in-plan for Infection Surveillance in the MDRO/CDI Module"
                name="mdroInfectionSurveillance"
              ></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Date Admitted to Facility:">
            <el-date-picker
              v-model="form.dateAdmittedToFacility"
              type="date"
              placeholder="Select date"
              style="width: 100%"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Location:">
            <el-input v-model="form.location" placeholder="Enter location" />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <div class="frm-grp-header">
            <p class="">Risk Factors</p>
          </div>
        </el-col>
        <el-col :span="24" style="margin-top: 20px">
          <el-form-item label="Urinary Catheter status:" label-position="top">
            <el-checkbox-group v-model="form.urinaryCatheterStatus">
              <el-checkbox
                label="In place - Urinary catheter in place > 2 days "
                name="urinaryCatheterStatus"
              ></el-checkbox>
              <el-checkbox
                label="On the date of event or present for any portion of • Removed - Urinary catheter in place > 2 days and removed the day"
                name="urinaryCatheterStatus"
              ></el-checkbox>
              <el-checkbox
                label="Before the date of event • Neither - Not catheter associated - Neither in place nor removed the calendar day"
                name="urinaryCatheterStatus"
              ></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Location of Device Insertion:">
            <el-input
              v-model="form.locationOfDeviceInsertion"
              placeholder="Enter location of device insertion"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Date Of Device Insertion:">
            <el-date-picker
              v-model="form.dateOfDeviceInsertion"
              type="date"
              placeholder="Select date"
              style="width: 100%"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-row :gutter="20">
            <el-col :span="24">
              <el-form-item label="If NICU, birth weight (gms):">
                <el-input
                  v-model="form.birthWeight"
                  placeholder="Enter birth weight"
                />
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="24">
          <div class="frm-grp-header">
            <p class="">Event Details</p>
          </div>
        </el-col>
        <el-col :span="24" style="margin-top: 20px">
          <el-form-item label="Specific Event:">
            <el-checkbox-group v-model="form.specificEvent">
              <el-checkbox
                label="Symptomatic UTI (SUTI)"
                name="specificEvent"
              ></el-checkbox>
              <el-checkbox
                label="Asymptomatic Bacteremic UTI (ABUTI)"
                name="specificEvent"
              ></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="Specify Criteria Used: (check all that apply):">
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="Any Patient:" label-position="top">
            <el-checkbox-group v-model="form.specifyCriteriaUsed.anyPatient">
              <el-checkbox
                label="Fever"
                name="specifyCriteriaUsed"
              ></el-checkbox>
              <el-checkbox
                label="Frequency"
                name="specifyCriteriaUsed"
              ></el-checkbox>
              <el-checkbox
                label="Urgency"
                name="specifyCriteriaUsed"
              ></el-checkbox>
              <el-checkbox
                label="Dysuria"
                name="specifyCriteriaUsed"
              ></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="≤ 1 year old:" label-position="top">
            <el-checkbox-group
              v-model="form.specifyCriteriaUsed.moreThanOneYear"
            >
              <el-checkbox
                label="Fever"
                name="specifyCriteriaUsed"
              ></el-checkbox>
              <el-checkbox
                label="Hypothermia"
                name="specifyCriteriaUsed"
              ></el-checkbox>
              <el-checkbox
                label="Apnea"
                name="specifyCriteriaUsed"
              ></el-checkbox>
              <el-checkbox
                label="Bradycardia"
                name="specifyCriteriaUsed"
              ></el-checkbox>
              <el-checkbox
                label="Lethargy"
                name="specifyCriteriaUsed"
              ></el-checkbox>
              <el-checkbox
                label="Vomiting"
                name="specifyCriteriaUsed"
              ></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<style scoped>
.form-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.el-form {
  display: flex;
  flex-direction: column;
}

.el-form-item {
  margin-bottom: 20px;
}

.el-button {
  background-color: #4caf50;
  color: white;
}

.el-button:hover {
  background-color: #45a049;
}
</style>
