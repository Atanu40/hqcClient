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
  nhsnProcedureCode: "",
  nameOfProcedure: "",
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
  personRecordingInsertionPracticeData: [],
  centralLineInserterID:"",
  last: "",
  first: "",
  occupauonOfInserter:[],
  picvTeam: false,
  reasonForInsertion: [],
  guideWire: false,
  lineInsertion:false,
  barriersUsed:[],
  skinPreparation:[],
  chlorHexidine:[],
  contrainDication:[],
  skinPuncture:[],
  insertionSite:[],
  antimicrobialCoatedCatheterUsed:[],
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
    <h2>CENTRAL LINE ASSOCIATED BLOOD STREAM INFECTION (CLABSI)</h2>
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
        <el-col :span="6">
          <el-form-item label="Age:">
            <el-input v-model="form.age" placeholder="Enter your age" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Sex:">
            <el-input
              v-model="form.sex"
              placeholder="Enter sex"
            />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Date of Admission:">
            <el-input
              v-model="form.dateOfAdmission"
              placeholder="Enter date of admission"
            />
          </el-form-item>
        </el-col>
     
        <el-col :span="6">
          <el-form-item label="Date of Event:">
            <el-input v-model="form.dateOfEvent" placeholder="Enter date of event" />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          
          <el-form-item label="Procedure Name:">
            <el-input v-model="form.nameOfProcedure" placeholder="Enter Procedure Name" />
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="NHSN Procedure code">
            <el-input v-model="form.nhsnProcedureCode" placeholder="Enter Procedure code" />
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="Date of procedure">
            <el-input v-model="form.dateOfProcedure" placeholder="Enter date Of Procedure" />
          </el-form-item>
        </el-col>

        <el-col :span="24">
          <el-form-item label="location">
            <el-input v-model="form.location" placeholder="Enter location" />
          </el-form-item>
        </el-col>
      </el-row>
   
      <div class="border p-5">
        <el-row :gutter="20">

          <el-col :span="4">
            <el-form-item label="Event Type: CLIP">
            </el-form-item>
          </el-col>

          <el-col :span="12">
          <el-form-item label="location">
            <el-input v-model="form.location" placeholder="Enter location" />
          </el-form-item>
        </el-col>

        <el-col :span="8">
            <el-form-item label="Date of Insertion:">
              <el-date-picker
                v-model="form.dateOfDeviceInsertion"
                type="date"
                placeholder="Select date"
                style="width: 100%"
              />
            </el-form-item>
        </el-col>


        <el-col :span="7">
          <el-form-item label="personRecordingInsertionPracticeData:">
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-checkbox-group v-model="form.personRecordingInsertionPracticeData">
            <el-checkbox
              label="Inserter"
              name="personRecordingInsertionPracticeData"
            ></el-checkbox>
            <el-checkbox
              label="Observer"
              name="personRecordingInsertionPracticeData"
            ></el-checkbox>
          </el-checkbox-group>    
        </el-col>


        <el-col :span="8">
          <el-form-item label="Central line inserter ID">
            <el-input v-model="form.centralLineInserterID" placeholder="Enter central line inserter id" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="Name, Last:">
            <el-input v-model="form.last" placeholder="Enter Last name" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="First:">
            <el-input v-model="form.first" placeholder="Enter first name" />
          </el-form-item>
        </el-col>


          <el-col :span="24">
            <el-form-item label="Occupation Of inserter:" label-position="top">
              
                <el-checkbox
                  label="Fellow"
                  name="occupauonOfInserter"
                ></el-checkbox>
                <el-checkbox
                  label="Medical student"
                  name="occupauonOfInserter"
                ></el-checkbox>
                <el-checkbox
                  label="Other student"
                  name="occupauonOfInserter"
                ></el-checkbox>
                <el-checkbox
                  label="Other medical staff"
                  name="occupauonOfInserter"
                ></el-checkbox>
                <el-checkbox
                  label="Physician assistant"
                  name="occupauonOfInserter"
                ></el-checkbox>
                <el-checkbox
                  label="Attending physician"
                  name="occupauonOfInserter"
                ></el-checkbox>
                <el-checkbox
                  label="Intern/resident"
                  name="occupauonOfInserter"
                ></el-checkbox>
                <el-checkbox
                  label="Registered nurse"
                  name="occupauonOfInserter"
                ></el-checkbox>
                <el-checkbox
                  label="Advanced practice nurse"
                  name="occupauonOfInserter"
                ></el-checkbox>
                <el-checkbox
                  label="Other (specify)"
                  name="occupauonOfInserter"
                ></el-checkbox>
              
            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item label="Was inserter a member of PICC/IV Team?">
              <el-checkbox-group v-model="form.picvTeam">
                <el-checkbox label="Yes" name="picvTeam"></el-checkbox>
                <el-checkbox label="No" name="picvTeam"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item label="Reason for insertion" label-position="top">
              
                <el-checkbox
                  label="New indication for central line (e.g., hemodynamic monitoring, fluid/medication administration, etc.)"
                  name="reasonForInsertion"
                ></el-checkbox>
                <el-checkbox
                  label="Replace malfunctioning central line"
                  name="reasonForInsertion"
                ></el-checkbox>
                <el-checkbox
                  label="Suspected central line-associated infection"
                  name="reasonForInsertion"
                ></el-checkbox>
                <el-checkbox
                  label="Other (specify):"
                  name="reasonForInsertion"
                ></el-checkbox>
                
              
            </el-form-item>
          </el-col>

          
          <el-col :span="24">
            <el-form-item label="If Suspected central line-associated infection, was the central line exchanged over a guidewire?">
              <el-checkbox-group v-model="form.guideWire">
                <el-checkbox label="Yes" name="guideWire"></el-checkbox>
                <el-checkbox label="No" name="guideWire"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>

          <el-col :span="14">
            <el-form-item label="Inserter performed hand hygiene prior to central line insertion:">
              <el-checkbox-group v-model="form.lineInsertion">
                <el-checkbox label="Yes" name="lineInsertion"></el-checkbox>
                <el-checkbox label="No" name="lineInsertion"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            (if not observed directly, ask inserter)
          </el-col>

          <el-col :span="24">
            *Maximal sterile barriers used:
          </el-col>

          <el-col :span="7">
            <el-form-item label="Mask">
              <el-checkbox-group v-model="form.barriersUsed">
                <el-checkbox label="Yes" name="barriersUsed"></el-checkbox>
                <el-checkbox label="No" name="barriersUsed"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="Sterile gown">
              <el-checkbox-group v-model="form.barriersUsed">
                <el-checkbox label="Yes" name="barriersUsed"></el-checkbox>
                <el-checkbox label="No" name="barriersUsed"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="Large sterile drape">
              <el-checkbox-group v-model="form.barriersUsed">
                <el-checkbox label="Yes" name="barriersUsed"></el-checkbox>
                <el-checkbox label="No" name="barriersUsed"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="Sterile gloves">
              <el-checkbox-group v-model="form.barriersUsed">
                <el-checkbox label="Yes" name="barriersUsed"></el-checkbox>
                <el-checkbox label="No" name="barriersUsed"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="Cap">
              <el-checkbox-group v-model="form.barriersUsed">
                <el-checkbox label="Yes" name="barriersUsed"></el-checkbox>
                <el-checkbox label="No" name="barriersUsed"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>

          <el-col :span="24">
            *Skin preparation (check all that apply)
          </el-col>

          <el-col :span="24">
                <el-checkbox
                  label="Chlorhexidine gluconate"
                  name="skinPreparation"
                ></el-checkbox>
                <el-checkbox
                  label="Povidone iodine"
                  name="skinPreparation"
                ></el-checkbox>
                <el-checkbox
                  label="Alcohol"
                  name="skinPreparation"
                ></el-checkbox>
                <el-checkbox
                  label="Other (specify):"
                  name="skinPreparation"
                ></el-checkbox>
          </el-col>

          <el-col :span="24">
            If skin prep choice was not chlorhexidine. was there a contraindication to chlorhexidine?
          </el-col>

          <el-col :span="24">
                <el-checkbox
                  label="Yes"
                  name="chlorHexidine"
                ></el-checkbox>
                <el-checkbox
                  label="No"
                  name="chlorHexidine"
                ></el-checkbox>
                <el-checkbox
                  label="Unknown"
                  name="chlorHexidine"
                ></el-checkbox>
          </el-col>

          <el-col :span="24">
            <el-form-item label="If there was a contraindication to chlorhexidine, indicate the type of contraindication:" label-position="top">
              
                <el-checkbox
                  label="Patient is less than 2 months of age - chlorhexidine is to be used with caution in patients less than 2 months of age"
                  name="contrainDication"
                ></el-checkbox>
                <el-checkbox
                  label="Patient has a documented/known allergy/reaction to CHG based products that would preclude its use"
                  name="contrainDication"
                ></el-checkbox>
                <el-checkbox
                  label="Facility restrictions or safety concerns for CHG use in premature infants precludes its use"
                  name="contrainDication"
                ></el-checkbox>    
            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item label="Was skin prep agent completely dry at time of first skin puncture?" label-position="top">
              
                <el-checkbox
                  label="Yes"
                  name="skinPuncture"
                ></el-checkbox>
                <el-checkbox
                  label="No"
                  name="skinPuncture"
                ></el-checkbox>
                
                (if not observed directly, ask inserter) 
            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item label="Insertion site:" label-position="top">
              
                <el-checkbox
                  label="Femoral"
                  name=" insertionSite"
                ></el-checkbox>
                <el-checkbox
                  label="Jugular"
                  name=" insertionSite"
                ></el-checkbox>
                <el-checkbox
                  label="Lower extremity"
                  name=" insertionSite"
                ></el-checkbox>
                <el-checkbox
                  label="Scalp"
                  name=" insertionSite"
                ></el-checkbox>
                <el-checkbox
                  label="Subclavian"
                  name=" insertionSite"
                ></el-checkbox>
                
                <el-checkbox
                  label="Umbilical"
                  name=" insertionSite"
                ></el-checkbox>

                <el-checkbox
                  label="Upper extremity"
                  name=" insertionSite"
                ></el-checkbox>
  
            </el-form-item>
          </el-col>
          

          <el-col :span="24">
            <el-form-item label="Antimicrobial coated catheter used:" label-position="top">
              
                <el-checkbox
                  label="Yes"
                  name="antimicrobialCoatedCatheterUsed"
                ></el-checkbox>
                <el-checkbox
                  label="No"
                  name="antimicrobialCoatedCatheterUsed"
                ></el-checkbox>
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
