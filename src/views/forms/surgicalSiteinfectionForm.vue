<script setup>
import { ref, onMounted } from "vue";
import { ElMessage } from "element-plus";
import { useBreadcrumbStore } from "@/store/breadcrumb";

const breadCrumbStore = useBreadcrumbStore();

const formRef = ref();

const form = ref({
  last: "",
  first: "",
  middle: "",
  uhidNo: "",
  gender: [],
  age: "",
  dateOfEvent: "",
  postProcedurePNEU: false,
  dateOfProcedure: "",
  nhsnProcedureCode: "",
  nameOfProcedure: "",
  location: "",
  mdroInfectionSurveillance: [],
  dateAdmittedToFacility: "",
  locationOfMechanicalVentilationInitiation: "",
  dateOfDeviceInsertion: "",
  aprv: false,
  specificEvent: [],
  specifyCriteriaUsed: {
    vac: [],
    ivac: [],
    pvap: [],
  },
  secondaryBloodstreamInfection: false,
  covid19:false,
  ifYes:[],
  ipNo: "",
  sex: "",
  dateOfAdmission: "",
  dateOfDischarge: "",
  surgicalProcedure: "",
  outPatientProcedure: false,
  died: false,
  vaeContributedToDeath:false,
  dischargeDate:"",
  pathogensIdentified:false,
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
    <h2>VENTILATOR ASSOCIATED EVENT (VAE, VAC, IVAC, PVAP)</h2>
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
          <el-form-item label="Patient's Name: Last">
            <el-input
              v-model="form.last"
              placeholder="Enter last name"
            />
          </el-form-item>
        </el-col>
        <el-col :span="8" class="">
          <el-form-item label="First:">
            <el-input
              v-model="form.first"
              placeholder="Enter first name"
            />
          </el-form-item>
        </el-col>
        <el-col :span="8" class="">
          <el-form-item label="Middle:">
            <el-input
              v-model="form.middle"
              placeholder="Enter middle name"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="UHID NO.">
            <el-input v-model="form.uhidNo" placeholder="Enter uhid no" />
          </el-form-item>
        </el-col>

        <el-col :span="12">
            <el-form-item label="Gender:">
              <el-checkbox-group v-model="form.gender">
                <el-checkbox label="Female" name="gender"></el-checkbox>
                <el-checkbox label="Male" name="gender"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="Age:">
            <el-input v-model="form.age" placeholder="Enter age" />
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="Date of Event:">
            <el-input v-model="form.dateOfEvent" placeholder="Enter date of event" />
          </el-form-item>
        </el-col>

        <el-col :span="12">
            <el-form-item label="Post Procedure PNEU:">
              <el-checkbox-group v-model="form.postProcedurePNEU">
                <el-checkbox label="Yes" name="postProcedurePNEU"></el-checkbox>
                <el-checkbox label="No" name="postProcedurePNEU"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="Date of procedure">
            <el-input v-model="form.dateOfProcedure" placeholder="Enter date Of Procedure" />
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="NHSN Procedure code">
            <el-input v-model="form.nhsnProcedureCode" placeholder="Enter Procedure code" />
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="Name of procedure">
            <el-input v-model="form.nameOfProcedure" placeholder="Enter name Of Procedure" />
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="location">
            <el-input v-model="form.location" placeholder="Enter location" />
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

          <el-col :span="12">
            <el-form-item label="Location of Mechanical Ventilation Initiation:">
              <el-input v-model="form.locationOfMechanicalVentilationInitiation" placeholder="Enter location" />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="Date Initiated:">
              <el-date-picker
                v-model="form.dateOfDeviceInsertion"
                type="date"
                placeholder="Select date"
                style="width: 100%"
              />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="APRV:">
              <el-checkbox-group v-model="form.aprv">
                <el-checkbox label="Yes" name="aprv"></el-checkbox>
                <el-checkbox label="No" name="aprv"></el-checkbox>
              </el-checkbox-group>
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
                  label="VAC"
                  name="specificEvent"
                ></el-checkbox>
                <el-checkbox
                  label="IVAC"
                  name="specificEvent"
                ></el-checkbox>
                <el-checkbox
                  label="PVAP"
                  name="specificEvent"
                ></el-checkbox>
               
              </el-checkbox-group>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="*Specify Criteria Used:">
            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item label="STEP 1: VAC (21 REQUIRED)" label-position="top">
            <el-checkbox-group v-model="form.specifyCriteriaUsed.vac">
              <el-checkbox
                label="Daily min Fi02 increase > 0.20 (20 points) for > 2 days"
                name="specifyCriteriaUsed"
              ></el-checkbox>
            </el-checkbox-group>
            </el-form-item>

            <el-form-item label="OR" label-position="top">
              <el-checkbox-group v-model="form.specifyCriteriaUsed.vac">
                <el-checkbox
                label="Daily min PEEP increase > 3 cm H20 for > 2 days after 2+ days of stable or decreasing daily minimum values."
                name="specifyCriteriaUsed"
              ></el-checkbox>
              </el-checkbox-group>
              </el-form-item>
          </el-col>
          
          <el-col :span="24">
            <el-form-item label="STEP 2: IVAC" label-position="top">
              <el-checkbox-group
                v-model="form.specifyCriteriaUsed.ivac"
              >
                <el-checkbox
                  label="Temperature > 380C or < 360"
                  name="specifyCriteriaUsed"
                ></el-checkbox>

              </el-checkbox-group>
            </el-form-item>

            <el-form-item label="OR" label-position="top">
              <el-checkbox-group
                v-model="form.specifyCriteriaUsed.ivac"
              >
              
                <el-checkbox
                  label="White blood cell count > 12,000 or < 4,000 cells/mm3"
                  name="specifyCriteriaUsed"
                ></el-checkbox>

              </el-checkbox-group>
            </el-form-item>

            <el-form-item label="AND" label-position="top">
              <el-checkbox-group
                v-model="form.specifyCriteriaUsed.ivac"
              >
                          
                <el-checkbox
                  label="A new antimicrobial agent(s) is started, and is continued for >4 days"
                  name="specifyCriteriaUsed"
                ></el-checkbox>

              </el-checkbox-group>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="STEP 3: PVAP" label-position="top">
              <el-checkbox-group
                v-model="form.specifyCriteriaUsed.pvap"
              >
                <el-checkbox
                  label="Criterion #1: Positive culture of one of the following specimens, meeting quantitative or semi-quantitative thresholds"
                  name="specifyCriteriaUsed"
                ></el-checkbox>
                <el-checkbox
                  label="Endotracheal aspirate"
                  name="specifyCriteriaUsed"
                ></el-checkbox>
                <el-checkbox
                  label="Lung tissue"
                  name="specifyCriteriaUsed"
                ></el-checkbox>
                <el-checkbox
                  label="Bronchoalveolar lavage"
                  name="specifyCriteriaUsed"
                ></el-checkbox>
                <el-checkbox
                  label="Protected specimen brush"
                  name="specifyCriteriaUsed"
                ></el-checkbox>
                

              </el-checkbox-group>
            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item label="OR" label-position="top">
              <el-checkbox-group
                v-model="form.specifyCriteriaUsed.pvap"
              >
                <el-checkbox
                  label="Criterion #2: Purulent respiratory secretionst (defined in the protocol) plus organism(s) identified from one of the
following specimens"
                  name="specifyCriteriaUsed"
                ></el-checkbox>
                <el-checkbox
                  label="Sputum"
                  name="specifyCriteriaUsed"
                ></el-checkbox>
                <el-checkbox
                  label="Lung tissue"
                  name="specifyCriteriaUsed"
                ></el-checkbox>
                <el-checkbox
                  label="Endotracheal as irate"
                  name="specifyCriteriaUsed"
                ></el-checkbox>
                <el-checkbox
                  label="Protected specimen brush"
                  name="specifyCriteriaUsed"
                ></el-checkbox>
                <el-checkbox
                  label="Bronchoalveolar lavage"
                  name="specifyCriteriaUsed"
                ></el-checkbox>
                <el-checkbox
                  label="Criterion #3: One of the following positive tests (as outlined in the protocol):"
                  name="specifyCriteriaUsed"
                ></el-checkbox>
                <el-checkbox
                  label="Organism(s) identified from pleural fluid"
                  name="specifyCriteriaUsed"
                ></el-checkbox>
                <el-checkbox
                  label="Diagnostic test for Legionella species"
                  name="specifyCriteriaUsed"
                ></el-checkbox>
                <el-checkbox
                  label="Lung histopathology"
                  name="specifyCriteriaUsed"
                ></el-checkbox>
                <el-checkbox
                  label="Diagnostic test for selected viral pathogens"
                  name="specifyCriteriaUsed"
                ></el-checkbox>

              </el-checkbox-group>
            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item label="OR" label-position="top">
              <el-checkbox-group
                v-model="form.specifyCriteriaUsed.pvap"
              >

                <el-checkbox
                  label="Criterion #3: One of the following positive tests (as outlined in the protocol):"
                  name="specifyCriteriaUsed"
                ></el-checkbox>
                <el-checkbox
                  label="Organism(s) identified from pleural fluid"
                  name="specifyCriteriaUsed"
                ></el-checkbox>
                <el-checkbox
                  label="Diagnostic test for Legionella species"
                  name="specifyCriteriaUsed"
                ></el-checkbox>
                <el-checkbox
                  label="Lung histopathology"
                  name="specifyCriteriaUsed"
                ></el-checkbox>
                <el-checkbox
                  label="Diagnostic test for selected viral pathogens"
                  name="specifyCriteriaUsed"
                ></el-checkbox>

              </el-checkbox-group>
            </el-form-item>
          </el-col>
          
          <el-col :span="24">
            <el-form-item label="collected after 2 days of mechanical ventilation and within +/- 2 days of onset of increase in Fi02 or PEEP.">
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

          <el-col :span="12">
            <el-form-item label="COVID-19:">
              <el-checkbox-group v-model="form.covid19">
                <el-checkbox label="Yes" name="covid19"></el-checkbox>
                <el-checkbox label="No" name="covid19"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="if yes:">
              <el-checkbox-group v-model="form.ifYes">
                <el-checkbox label="Yes" name="ifYes"></el-checkbox>
                <el-checkbox label="No" name="ifYes"></el-checkbox>
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
            <el-form-item label="VAE Contributed to Death:">
              <el-checkbox-group v-model="form.vaeContributedToDeath">
                <el-checkbox label="Yes" name="vaeContributedToDeath"></el-checkbox>
                <el-checkbox label="No" name="vaeContributedToDeath"></el-checkbox>
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
