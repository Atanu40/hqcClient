<script setup>
import { ref, onMounted } from "vue";
import { ElMessage } from "element-plus";
import { useBreadcrumbStore } from "@/store/breadcrumb";

const breadCrumbStore = useBreadcrumbStore();

const formRef = ref();

const form = ref({
  patientsName: "",
  ipNo: "",
  uhidNo: "",
  age: "",
  sex: "",
  dateOfAdmission: "",
  dateOfProcedure: "",
  dateOfDischarge: "",
  surgicalProcedure: "",
  dateOfEvent: "",
  outPatientProcedure: false,
  location: "",
  mdroInfectionSurveillance: [],
  dateAdmittedToFacility: "",
  specificEvent:[],
  organ: "",
  infectionResentAtTheTimeOfSurgery:false,
  specifyCriteriaUsed: {
    signsSymptoms: [],
    laboratory: [],
    clinicalDiagnosis: [],
  },
  detected:[],
  secondaryBloodstreamInfection: false,
  died: false,
  ssiContributedToDeath: false,
  dischargeDate:"",
  pathogensIdentified:false,
  covid19:false,
  ifYes:false,
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
    <h2>Spandan Heart Institute & Research Centre, Nagpur</h2>
    <h2>SURGICAL SITE INFECTION (SSI)</h2>
    <el-form @submit.prevent="submitForm" >
      <!-- Section 1: Primary Details -->
      <el-row :gutter="20">
        <el-col :span="8" class="">
          <!-- <el-form-item label="Date of Device Insertion:">
            <el-date-picker
              v-model="dateOfDeviceInsertion"
              type="date"
              placeholder="Select date"
            ></el-date-picker> -->
          <!-- form.facilityId -->
          <el-form-item label="Patient's Name:">
            <el-input
              v-model="form.patientsName"
              placeholder="Enter patient's name"
            />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="IP NO.">
            <el-input v-model="form.ipNo" placeholder="Enter ip no" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="UHID NO.">
            <el-input v-model="form.uhidNo" placeholder="Enter uhid no" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="Age:">
            <el-input v-model="form.age" placeholder="Enter your age" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="Sex:">
            <el-input
              v-model="form.sex"
              placeholder="Enter sex"
            />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="Date of Admission:">
            <el-input
              v-model="form.dateOfAdmission"
              placeholder="Enter date of admission"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Surgical procedure:">
            <el-input
              v-model="form.surgicalProcedure"
              placeholder="Enter surgical procedure"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Date of Event:">
            <el-input v-model="form.dateOfEvent" placeholder="Enter date of event" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          
          <el-form-item label="Out patient procedure:">
            <el-checkbox-group v-model="form.outPatientProcedure">
              <el-checkbox label="Yes" name="outPatientProcedure"></el-checkbox>
              <el-checkbox label="No" name="outPatientProcedure"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Location:">
            <el-select
              v-model="form.location"
              placeholder="Select location"
              style="width: 100%"
            >
              <el-option label="SICU" value="SICU" />
              <el-option label="ICCU" value="ICCU" />
              <el-option label="Ward" value="Ward" />
              <el-option label="General Ward" value="General Ward" />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
   
      <div class="border p-5">
        <el-row :gutter="20">

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
              <el-input v-model="form.age" placeholder="Enter date admitted to facility" />
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
              <p class="">Event Details</p>
            </div>
          </el-col>
          
          <el-col :span="24" style="margin-top: 20px">
            <el-form-item label="Specific Event:" label-position="top">
              <el-checkbox-group v-model="form.specificEvent">
                <el-checkbox
                  label="Superficial Incisional Primary (SIP) "
                  name="specificEvent"
                ></el-checkbox>
                <el-checkbox
                  label="Deep Incisional Primary (DIP)"
                  name="specificEvent"
                ></el-checkbox>
                <el-checkbox
                  label="Superficial Incisional Secondary (SIS)"
                  name="specificEvent"
                ></el-checkbox>
                <el-checkbox
                  label="Deep Incisional Secondary (DIS)"
                  name="specificEvent"
                ></el-checkbox>
                <el-checkbox
                  label="Organ/Space"
                  name="specificEvent"
                ></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="Infection present at the time of surgery (PATOS):">
              <el-checkbox-group v-model="form.infectionResentAtTheTimeOfSurgery">
                <el-checkbox label="Yes" name="infectionResentAtTheTimeOfSurgery"></el-checkbox>
                <el-checkbox label="No" name="infectionResentAtTheTimeOfSurgery"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item label="*Specify Criteria Used (check all that apply):">
            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item label="Signs & Symptoms" label-position="top">
            <el-checkbox-group v-model="form.specifyCriteriaUsed.signsSymptoms">
              <el-checkbox
                label="Drainage or material"
                name="specifyCriteriaUsed"
              ></el-checkbox>
              <el-checkbox
                label="Pain or tenderness"
                name="specifyCriteriaUsed"
              ></el-checkbox>
              <el-checkbox
                label="Swelling or inflammation"
                name="specifyCriteriaUsed"
              ></el-checkbox>
              <el-checkbox
                label="Erythema or redness"
                name="specifyCriteriaUsed"
              ></el-checkbox>
              <el-checkbox
                label="Heat"
                name="specifyCriteriaUsed"
              ></el-checkbox>
              <el-checkbox
                label="Fever"
                name="specifyCriteriaUsed"
              ></el-checkbox>
              <el-checkbox
                label="Incision deliberately"
                name="specifyCriteriaUsed"
              ></el-checkbox>
              <el-checkbox
                label="Wound spontaneously dehisces"
                name="specifyCriteriaUsed"
              ></el-checkbox>
              <el-checkbox
                label="Wound spontaneously dehisces"
                name="specifyCriteriaUsed"
              ></el-checkbox>
              <el-checkbox
                label="Abscess"
                name="specifyCriteriaUsed"
              ></el-checkbox>
              <el-checkbox
                label="Other evidence of infection found on invasive procedure,
  gross anatomic exam, or histopathologic exam"
                name="specifyCriteriaUsed"
              ></el-checkbox>
              <el-checkbox
                label="Other signs & symptoms"
                name="specifyCriteriaUsed"
              ></el-checkbox>
              <el-checkbox
                label="Sinus tract"
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
                label="Cough"
                name="specifyCriteriaUsed"
              ></el-checkbox>
              <el-checkbox
                label="Nausea"
                name="specifyCriteriaUsed"
              ></el-checkbox>
              <el-checkbox
                label="Vomiting"
                name="specifyCriteriaUsed"
              ></el-checkbox>
              <el-checkbox
                label="Dysuria"
                name="specifyCriteriaUsed"
              ></el-checkbox>
            </el-checkbox-group>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="Laboratory" label-position="top">
              <el-checkbox-group
                v-model="form.specifyCriteriaUsed.laboratory"
              >
                <el-checkbox
                  label="Organism(s) identified"
                  name="specifyCriteriaUsed"
                ></el-checkbox>
                <el-checkbox
                  label="Culture or non-culture based testing not performed"
                  name="specifyCriteriaUsed"
                ></el-checkbox>
                <el-checkbox
                  label="Organism(s) identified from blood specimen"
                  name="specifyCriteriaUsed"
                ></el-checkbox>
                <el-checkbox
                  label="Organism(s) identified from 2 2 periprosthetic
specimens"
                  name="specifyCriteriaUsed"
                ></el-checkbox>
                <el-checkbox
                  label="Other positive laboratory tests"
                  name="specifyCriteriaUsed"
                ></el-checkbox>
                <el-checkbox
                  label="Imaging test evidence of infection"
                  name="specifyCriteriaUsed"
                ></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Clinical Diagnosis" label-position="top">
              <el-checkbox-group
                v-model="form.specifyCriteriaUsed.clinicalDiagnosis"
              >
                <el-checkbox
                  label="Physician diagnosis of this event type"
                  name="specifyCriteriaUsed"
                ></el-checkbox>
                <el-checkbox
                  label="Physician institutes appropriate antimicrobial
therapyt"
                  name="specifyCriteriaUsed"
                ></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
          
          <el-col :span="24">
            <el-form-item label="per specific site criteria">
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="Detected:" label-position="top">
            <el-checkbox-group v-model="form.detected">
              <el-checkbox
                label="A (During admission)"
                name="detected"
              ></el-checkbox>
              <el-checkbox
                label="P (Post-discharge surveillance)"
                name="detected"
              ></el-checkbox>
              <el-checkbox
                label="RF (Readmission to facility where procedure performed)"
                name="detected"
              ></el-checkbox>
              <el-checkbox
                label="RO (Readmission to facility other than where procedure was performed)"
                name="detected"
              ></el-checkbox>             
            </el-checkbox-group>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="Seconda Bloodstream Infection:">
              <el-checkbox-group v-model="form.secondaryBloodstreamInfection">
                <el-checkbox label="Yes" name="secondaryBloodstreamInfection"></el-checkbox>
                <el-checkbox label="No" name="secondaryBloodstreamInfection"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Died:">
              <el-checkbox-group v-model="form.died">
                <el-checkbox label="Yes" name="died"></el-checkbox>
                <el-checkbox label="No" name="died"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="SSI Contributed to Death:">
              <el-checkbox-group v-model="form.ssiContributedToDeath">
                <el-checkbox label="Yes" name="ssiContributedToDeath"></el-checkbox>
                <el-checkbox label="No" name="ssiContributedToDeath"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="Discharge Date:">
              <el-input v-model="form.dischargeDate" placeholder="Enter discharge date" />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="Pathogens Identified:">
              <el-checkbox-group v-model="form.pathogensIdentified">
                <el-checkbox label="Yes" name="pathogensIdentified"></el-checkbox>
                <el-checkbox label="No" name="pathogensIdentified"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item label="COVID-19:">
              <el-checkbox-group v-model="form.covid19">
                <el-checkbox label="Yes" name="covid19"></el-checkbox>
                <el-checkbox label="No" name="covid19"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item label="if yes:">
              <el-checkbox-group v-model="form.ifYes">
                <el-checkbox label="Yes" name="ifYes"></el-checkbox>
                <el-checkbox label="No" name="ifYes"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
      </el-row>
      </div>
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
