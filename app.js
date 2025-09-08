// Icons
const ICONS = {
    avaamo: 'https://s3.us-west-1.amazonaws.com/static.aiavaamo.com/icons/avaamo_icon.svg',
    clock: 'https://s3.us-west-1.amazonaws.com/static.aiavaamo.com/icons/clock_icon.svg',
    download: 'https://s3.us-west-1.amazonaws.com/static.aiavaamo.com/icons/download_pdf_icon.svg',
    chevronDown: 'https://s3.us-west-1.amazonaws.com/static.aiavaamo.com/icons/fi_chevron-down.svg',
    imaging: 'https://s3.us-west-1.amazonaws.com/static.aiavaamo.com/icons/imaging_icon.svg',
    meds: 'https://s3.us-west-1.amazonaws.com/static.aiavaamo.com/icons/medications_icon.svg',
    tests: 'https://s3.us-west-1.amazonaws.com/static.aiavaamo.com/icons/test_results_icon.svg',
    view: 'https://s3.us-west-1.amazonaws.com/static.aiavaamo.com/icons/view_pdf_icon.svg',
    bx_detail: 'https://s3.us-west-1.amazonaws.com/static.aiavaamo.com/icons/bx_detail.svg',
    mdi_timeline_outline: 'https://s3.us-west-1.amazonaws.com/static.aiavaamo.com/icons/mdi_timeline-outline.svg'
};

// Data model for right-pane cards (with icons)
const listViewData = [
    // {
    //     id: 'medications',
    //     title: 'Medications',
    //     icon: ICONS.meds,
    //     bullets: [
    //         'Lisinopril 10mg daily',
    //         'Metformin 500mg BID',
    //         'PRN Ibuprofen'
    //     ],
    // },
    {
        id: 'medications',
        title: 'Medications',
        icon: ICONS.meds,
        bullets: [{
                "name": "montelukast 4 MG chewable tablet",
                "common_name": "Singulair",
                "instructions": "Chew 1 tablet (4 mg total) every night.",
                "prescription_status": "Expired",
                "expiration_date": "June 23, 2023",
                "prescription_details": {
                    "prescribed_date": "June 23, 2022",
                    "approved_by": "John P Parker"
                },
                "refill_details": {
                    "quantity": "30 tablets",
                    "day_supply": "30"
                },
                "pharmacy_details": {
                    "name": "External Outpatient Pharmacy",
                    "address": "1979 Milky Way, Verona WI 53593",
                    "phone": "608-271-9000"
                }
            },
            {
                "name": "lisinopril 2.5 MG tablet",
                "common_name": "PRINIVIL, ZESTRIL",
                "instructions": "Take 1 tablet (2.5 mg total) by mouth 1 (one) time each day.",
                "prescription_status": "Expired",
                "expiration_date": "June 23, 2023",
                "prescription_details": {
                    "prescribed_date": "June 23, 2022",
                    "approved_by": "John P Parker"
                },
                "refill_details": {
                    "quantity": "30 tablets",
                    "day_supply": "30"
                },
                "pharmacy_details": {
                    "name": "External Outpatient Pharmacy",
                    "address": "1979 Milky Way, Verona WI 53593",
                    "phone": "608-271-9000"
                }
            },
            {
                "name": "cetirizine 10 MG tablet",
                "common_name": "ZyrTEC",
                "instructions": "Take 1 tablet (10 mg total) by mouth 1 (one) time each day.",
                "prescription_status": "Expired",
                "expiration_date": "July 2, 2024",
                "prescription_details": {
                    "prescribed_date": "July 2, 2018",
                    "approved_by": "John P Parker"
                },
                "refill_details": {
                    "quantity": "30 tablets",
                    "day_supply": "30"
                },
                "pharmacy_details": {
                    "name": "EMC Prescription Pharmacy West",
                    "address": "123 Anywhere Street, Verona WI 53593",
                    "phone": "555-555-5555"
                }
            },
            {
                "name": "raNITIdine 300 MG tablet",
                "common_name": "ZANTAC",
                "instructions": "Take 1 tablet (300 mg total) by mouth nightly.",
                "prescription_status": "Prescribed",
                "expiration_date": "",
                "prescription_details": {
                    "prescribed_date": "October 15, 2012",
                    "approved_by": "John P Parker"
                },
                "refill_details": {
                    "quantity": "30 tablets",
                    "day_supply": "30"
                },
                "pharmacy_details": {
                    "name": "External Outpatient Pharmacy",
                    "address": "1979 Milky Way, Verona WI 53593",
                    "phone": "608-271-9000"
                }
            },
            {
                "name": "levothyroxine 25 MCG tablet",
                "common_name": "Levothroid",
                "instructions": "Take 1 tablet (25 mcg total) by mouth daily.",
                "prescription_status": "Prescribed",
                "expiration_date": "",
                "prescription_details": {
                    "prescribed_date": "February 14, 2011",
                    "approved_by": "John P Parker"
                },
                "refill_details": {
                    "quantity": "30 tablets",
                    "day_supply": "30"
                },
                "pharmacy_details": {
                    "name": "External Outpatient Pharmacy",
                    "address": "1979 Milky Way, Verona WI 53593",
                    "phone": "608-271-9000"
                }
            }
        ]
    },
    {
        id: 'labs',
        title: 'Recent Test Results',
        icon: ICONS.tests,
        entries: [
            // { label: 'CBC/CMP', value: 'within baseline', date: '2025-06-15' },
            // { label: 'B12', value: '520 pg/mL', date: '2025-07-10' },
            // { label: 'Folate', value: 'normal', date: '2025-07-10' },
            // { label: 'TSH', value: '1.8 µIU/mL', date: '2025-07-10' },
            // { label: 'ESR/CRP', value: 'normal', date: '2025-07-18' }
            {
                "label": "URINALYSIS REFLEX TO URINE CULTURE",
                "date": "2025-03-28",
                "results": [{
                        "name": "Source Urine",
                        "value": "Clean catch"
                    },
                    {
                        "name": "Urine Color",
                        "value": "Clear",
                        "range": "Colorless, Pale Yellow, Light Yellow, Yellow, Dark Yellow, Straw",
                        "abnormal": true
                    },
                    {
                        "name": "Urine Clarity",
                        "value": "Slightly Cloudy",
                        "range": "Clear, Slightly Cloudy"
                    },
                    {
                        "name": "Urine",
                        "value": "6.0",
                        "min": 5.0,
                        "max": 8.0,
                        "unit": "pH"
                    },
                    {
                        "name": "Urine Protein Screen",
                        "value": "Negative",
                        "range": "Negative, Trace mg/dL",
                        "unit": '', // (value == "Negative" ? '' : "mg/dL")
                    },
                    {
                        "name": "Urine Glucose",
                        "value": "Negative",
                        "range": "Negative",
                        "unit": '', // (value == "Negative" ? '' : "mg/dL")
                    },
                    {
                        "name": "Urine Ketones",
                        "value": "Negative",
                        "range": "Negative",
                        "unit": '', // (value == "Negative" ? '' : "mg/dL")
                    },
                    {
                        "name": "Urine Occult Blood",
                        "value": "Moderate",
                        "range": "Negative",
                        "abnormal": true
                    },
                    {
                        "name": "Urine Specific Gravity",
                        "value": "1.029",
                        "min": 1.005,
                        "max": 1.030
                    },
                    {
                        "name": "Urine Nitrite",
                        "value": "Positive",
                        "range": "Negative",
                        "abnormal": true
                    },
                    {
                        "name": "Urine Leukocyte Esterase",
                        "value": "Small",
                        "range": "Negative",
                        "abnormal": true
                    },
                    {
                        "name": "Urine Bilirubin",
                        "value": "Negative",
                        "range": "Negative"
                    },
                    {
                        "name": "Urine Urobilinogen",
                        "value": "0.2",
                        "min": 0,
                        "max": 2.0,
                        "unit": "mg/dL"
                    }
                ]
            },
            {
                label: 'POCT CBC',
                date: '2012-10-28',
                results: [
                    { name: 'Hematocrit', value: '50', min: 41, max: 53, unit: '%' },
                    { name: 'Hemoglobin', value: '15.25', min: 13.5, max: 17.5, unit: 'g/dL' },
                    { name: 'RBC', value: '5.2', min: 4.5, max: 5.9, unit: '10^6/µL' },
                    { name: 'WBC', value: '5.6', unit: '10^3/mL' },
                    { name: 'MCV', value: '80' },
                    { name: 'MCH', value: '26' },
                    { name: 'MCHC', value: '31' },
                    { name: 'RDW-CV', value: '13.3' },
                    { name: 'Platelet Count, POC', value: '210', min: 150, max: 399, unit: 'K/µL' },
                    { name: 'MPV', value: '11.2' },
                ]
            },
            {
                label: 'POCT CBC',
                date: '2012-10-19',
                results: [
                    { name: 'Hematocrit', value: 45, min: 41, max: 53, unit: '%' },
                    { name: 'Hemoglobin', value: 15, min: 13.5, max: 17.5, unit: 'g/dL' },
                    { name: 'RBC', value: 5.1, min: 4.5, max: 5.9, unit: '10^6/µL' },
                    { name: 'Auto WBC', value: '5.5', unit: '10^3/mL' },
                    { name: 'MCV', value: '80' },
                    { name: 'MCH', value: '26' },
                    { name: 'MCHC', value: '31' },
                    { name: 'RDW-CV', value: '13.1' },
                    { name: 'Platelets', value: 200, min: 150, max: 399, unit: 'K/µL' },
                    { name: 'MPV', value: '11.1' },
                ]
            },
            {
                label: 'CBC',
                date: '2010-02-20',
                results: [
                    { name: 'Hgb, blood gas', value: '15', min: 13.5, max: 17.5, unit: '' },
                    { name: 'Hematocrit', value: '44.4', min: 41, max: 53, unit: '%' },
                    { name: 'Neutrophils Absolute', value: '5.4', min: 1.7, max: 7, unit: '/uL' },
                    { name: 'Lymphocytes Absolute', value: '1.2', min: 0.9, max: 2.9, unit: '/uL' },
                    { name: 'Monocytes Absolute', value: '0.6', min: 0.3, max: 0.9, unit: '/uL' },
                    { name: 'Eosinophils Absolute', value: '0.3', min: 0.05, max: 0.5, unit: '/uL' },
                    { name: 'Platelets', value: '432', min: 150, max: 450, unit: 'K/uL' }
                ]
            },
            // {
            //     label: 'LIPID PANEL',
            //     date: '2010-02-20',
            //     results: [
            //         { name: 'Triglycerides', value: '155' }
            //     ]
            // },
            {
                label: 'CBC',
                date: '2006-07-07',
                results: [
                    { name: 'Hgb, blood gas', value: '14.1', min: 13.5, max: 17.5, unit: '' },
                    { name: 'Hematocrit', value: '42.9', min: 41, max: 53, unit: '%' },
                    { name: 'Neutrophils Absolute', value: '5', min: 1.7, max: 7, unit: '/uL' },
                    { name: 'Lymphocytes Absolute', value: '1.1', min: 0.9, max: 2.9, unit: '/uL' },
                    { name: 'Platelets', value: '375', min: 150, max: 450, unit: 'K/uL' }
                ]
            }
        ]
    },
    {
        id: 'imaging',
        title: 'Imaging',
        icon: ICONS.imaging,
        entries: [
            { label: 'MRI Brain', value: 'No acute findings', date: '2024-11-05', image: 'mri-brain.png' },
            { label: 'EEG', value: 'Normal, no epileptiform discharges', date: '2025-06-10', image: 'eeg-result.png' },
            { label: 'EMG/NCS', value: 'Not performed', date: null }
        ]
    }
];


// Simulated visit dates - matching the dates in visitSamples JSON
const visitDates = [
    '2025-8-20',
    '2025-06-05',
    '2025-04-18',
    '2024-01-10',
    '2024-11-15',
];

// Data model for left-pane cards (5 total encounters → reduced to 3 Sleep Apnea + 2 Headaches)
const visitSamples = [{
        "date": "2025-08-20",
        "Chief Complaint": "Routine follow-up, no headaches.",
        "History of Present Illness": "Patient reports feeling well, headaches resolved with CPAP compliance. Sleep regular, >90% adherence. No new neurological complaints.",
        "Past Medical History": "Migraines (2021), mild hypertension, mild obstructive sleep apnea (2025).",
        "Past Surgical History": "Appendectomy in 2018.",
        "Medications & Allergies": "Lisinopril 10 mg daily; Allergic to penicillin (rash).",
        "Family History": "Father with migraines.",
        "Social History": "Non-smoker, occasional coffee, night shifts, moderate exercise.",
        "Review of Systems": "Denies headaches, dizziness, numbness, vision/speech changes.",
        "Physical Examination": "Vitals stable, neurological exam normal.",
        "Imaging/Lab Results": "No new imaging or labs.",
        "Assessment": "Neurologically stable, headaches resolved with CPAP.",
        "Plan": "Continue CPAP nightly, monitor symptoms, annual follow-up.",
        "Summary": "Patient presented for routine follow-up and reports being symptom-free over the past month. Headaches have completely resolved with consistent CPAP use and improved sleep hygiene. No new neurological complaints or changes in physical examination findings. Patient demonstrates good understanding of therapy compliance and lifestyle recommendations. Continue current management and monitor periodically.",
        "Encounter Details": {
            "Speciality": "Neurology",
            "Encounter ID": "20250820",
            "Date & Time": "August 20, 2025, 10:30 AM",
            "Encounter Status": "Completed",
            "Encounter Duration": "30 minutes"
        }
    },
    {
        "date": "2025-06-05",
        "Chief Complaint": "Follow-up after CPAP mask change.",
        "History of Present Illness": "Headaches reduced to 1–2/week after new nasal mask. Mild photophobia, no nausea/vomiting.",
        "Past Medical History": "Migraines, mild hypertension, mild OSA.",
        "Past Surgical History": "Appendectomy 2018.",
        "Medications & Allergies": "Lisinopril 10 mg daily. Penicillin allergy (rash).",
        "Family History": "Father with migraines.",
        "Social History": "Non-smoker, occasional coffee, night shifts.",
        "Review of Systems": "Mild headaches; otherwise negative.",
        "Physical Examination": "Neurological exam normal.",
        "Imaging/Lab Results": "No new imaging.",
        "Assessment": "Improved headache frequency with better CPAP adherence.",
        "Plan": "Continue CPAP nightly, follow-up in 2–3 months.",
        "Summary": "Patient presented for follow-up after CPAP mask change. Headache frequency and severity have improved significantly, now occurring only 1–2 times per week. Mild photophobia noted but otherwise symptoms well controlled. Neurological examination remains normal, and vitals stable. Patient educated on continuing therapy compliance, lifestyle modifications, and monitoring triggers. Plan to maintain current therapy and review progress at the next scheduled visit.",
        "Encounter Details": {
            "Speciality": "Neurology",
            "Encounter ID": "20250605",
            "Date & Time": "June 5, 2025, 9:00 AM",
            "Encounter Status": "Completed",
            "Encounter Duration": "25 minutes"
        }
    },
    {
        "date": "2025-04-18",
        "Chief Complaint": "Headaches worsening after stopping CPAP.",
        "History of Present Illness": "Stopped CPAP due to mask discomfort. Headaches 4–5/week, lasting 1–2h, light sensitivity present.",
        "Past Medical History": "Migraines, hypertension, mild OSA.",
        "Past Surgical History": "Appendectomy 2018.",
        "Medications & Allergies": "Lisinopril 10 mg daily. Allergic to penicillin.",
        "Family History": "Father with migraines.",
        "Social History": "Coffee 2x/day, night shifts, limited exercise.",
        "Review of Systems": "Positive headaches, photophobia. Denies weakness, numbness.",
        "Physical Examination": "BP 142/90, neuro exam otherwise normal.",
        "Imaging/Lab Results": "No new imaging.",
        "Assessment": "Headaches worsened due to untreated OSA.",
        "Plan": "Restart CPAP with alternative mask, refer to sleep specialist.",
        "Summary": "Patient reports worsening headaches after discontinuing CPAP therapy. Headaches now occur 4–5 times per week and are occasionally associated with photophobia. No neurological deficits were noted on examination. Education provided regarding the importance of CPAP adherence and mask selection. Referred to sleep specialist for further management and advised to keep a detailed headache diary. Therapy compliance emphasized to prevent further symptom escalation.",
        "Encounter Details": {
            "Speciality": "Neurology",
            "Encounter ID": "20250418",
            "Date & Time": "April 18, 2025, 11:00 AM",
            "Encounter Status": "Completed",
            "Encounter Duration": "30 minutes"
        }
    },
    {
        "date": "2025-01-10",
        "Chief Complaint": "Follow-up after sleep study.",
        "History of Present Illness": "Headaches decreased to 2/week. Sleep study confirmed mild OSA. Started CPAP.",
        "Past Medical History": "Migraines, mild hypertension, mild OSA.",
        "Past Surgical History": "Appendectomy 2018.",
        "Medications & Allergies": "Lisinopril 10 mg daily. Started CPAP. Allergic to penicillin.",
        "Family History": "Father with migraines.",
        "Social History": "Reduced coffee intake, night shifts, exercises moderately.",
        "Review of Systems": "Occasional mild headaches only.",
        "Physical Examination": "BP 130/84, neuro exam normal.",
        "Imaging/Lab Results": "Sleep study reviewed.",
        "Assessment": "Improved headache control with CPAP and sleep changes.",
        "Plan": "Continue CPAP, follow-up in 3 months.",
        "Summary": "Patient demonstrated improvement in headache frequency after adjusting sleep schedule and initiating CPAP therapy. Headaches now occur only twice per week and are mild. No new neurological deficits noted. Patient adheres well to therapy, understands lifestyle recommendations, and is motivated to continue compliance. Reinforced importance of sleep hygiene, caffeine moderation, and follow-up monitoring.",
        "Encounter Details": {
            "Speciality": "Neurology",
            "Encounter ID": "20250110",
            "Date & Time": "January 10, 2025, 2:00 PM",
            "Encounter Status": "Completed",
            "Encounter Duration": "20 minutes"
        }
    },
    {
        "date": "2024-11-15",
        "Chief Complaint": "Frequent morning headaches.",
        "History of Present Illness": "Dull daily headaches, worse upon waking. No nausea, vomiting, vision changes.",
        "Past Medical History": "Migraines, mild hypertension.",
        "Past Surgical History": "Appendectomy 2018.",
        "Medications & Allergies": "Lisinopril 10 mg daily. Allergic to penicillin.",
        "Family History": "Father with migraines.",
        "Social History": "Coffee twice daily, night shifts, minimal exercise.",
        "Review of Systems": "Positive for headaches only.",
        "Physical Examination": "BP 138/88, neurological exam normal.",
        "Imaging/Lab Results": "Labs normal, no imaging yet.",
        "Assessment": "Morning headaches likely linked to poor sleep / suspected OSA.",
        "Plan": "Sleep study ordered.",
        "Summary": "Patient reports frequent morning headaches over the past two months, predominantly occurring upon waking and lasting 1–2 hours. Headaches are dull and not associated with neurological deficits. Examination and vitals are within normal limits. Suspected underlying sleep disruption, potentially mild sleep apnea. Sleep study recommended, lifestyle adjustments suggested, and follow-up planned to evaluate response to interventions.",
        "Encounter Details": {
            "Speciality": "Neurology",
            "Encounter ID": "20241115",
            "Date & Time": "November 15, 2024, 10:00 AM",
            "Encounter Status": "Completed",
            "Encounter Duration": "25 minutes"
        }
    }
];

// Data model for left-pane cards based on problems (3 Sleep Apnea + 2 Headaches)
const visitProblems = [{
        problem: "Sleep Apnea",
        onset: "Diagnosed Jan 2025 (sleep study)",
        causes: ["Obstructive airway during sleep"],
        course: [{
                date: "2025-01-10",
                status: "Confirmed mild OSA",
                reason: "Sleep study results",
                notes: "CPAP initiated",
                summary: "Mild OSA confirmed; CPAP started."
            },
            {
                date: "2025-04-18",
                status: "Non-adherence",
                reason: "Stopped CPAP due to mask discomfort",
                notes: "Headaches worsened",
                summary: "Stopped CPAP due to mask discomfort, leading to worsening headaches."
            },
            {
                date: "2025-06-05",
                status: "Improved with new mask → Now well controlled",
                reason: "Better adherence after nasal mask change",
                notes: "Headaches reduced to 1–2/week, later resolved with full compliance",
                summary: "OSA control improved after CPAP mask change; ultimately well controlled by August 2025."
            }
        ],
        currentStatus: "Well controlled with consistent CPAP (as of Aug 2025)",
        priority: "High — root cause of headaches",
        relatedConditions: ["Headaches", "Hypertension"],
        position: 1
    },
    {
        problem: "Headaches",
        onset: "Reported since 2024-11",
        causes: ["Poor sleep / OSA", "Stopped CPAP due to mask issues"],
        course: [{
                date: "2024-11-15",
                status: "Frequent morning headaches",
                reason: "Likely linked to untreated sleep apnea",
                notes: "Sleep study recommended",
                summary: "Patient reported daily morning headaches, suspected to be due to sleep apnea."
            },
            {
                date: "2025-08-20",
                status: "Resolved, no headaches",
                reason: "Consistent CPAP use and better sleep hygiene",
                notes: "Neurologically stable",
                summary: "Headaches resolved with consistent CPAP compliance and improved sleep hygiene."
            }
        ],
        currentStatus: "Resolved with CPAP compliance",
        priority: "High — secondary to untreated OSA",
        relatedConditions: ["Sleep Apnea", "Hypertension"],
        position: 2
    }
];


// // Data model for left-pane cards based on problems (3 Sleep Apnea + 2 Headaches)
// const visitProblems = [{
//         problem: "Sleep Apnea",
//         onset: "Diagnosed Jan 2025 (sleep study)",
//         causes: ["Obstructive airway during sleep"],
//         course: [{
//                 date: "2025-01-10",
//                 status: "Confirmed mild OSA",
//                 reason: "Sleep study results",
//                 notes: "CPAP initiated",
//                 summary: "Mild OSA confirmed; CPAP started."
//             },
//             {
//                 date: "2025-04-18",
//                 status: "Non-adherence",
//                 reason: "Stopped CPAP due to mask discomfort",
//                 notes: "Headaches worsened",
//                 summary: "Stopped CPAP due to mask discomfort, leading to worsening headaches."
//             },
//             {
//                 date: "2025-06-05",
//                 status: "Improved with new mask",
//                 reason: "Better adherence after nasal mask change",
//                 notes: "Headaches reduced to 1–2/week, milder symptoms",
//                 summary: "OSA control improved after CPAP mask change; headaches decreased."
//             }
//             // ✅ dropped Aug 2025 so we keep 3 total
//         ],
//         currentStatus: "Stable with CPAP",
//         priority: "High — root cause of headaches",
//         relatedConditions: ["Headaches", "Hypertension"],
//         position: 1
//     },
//     {
//         problem: "Headaches",
//         onset: "Reported since 2024-11",
//         causes: ["Poor sleep / OSA", "Stopped CPAP due to mask issues"],
//         course: [{
//                 date: "2024-11-15",
//                 status: "Frequent morning headaches",
//                 reason: "Likely linked to untreated sleep apnea",
//                 notes: "Sleep study recommended",
//                 summary: "Patient reported daily morning headaches, suspected to be due to sleep apnea."
//             },
//             {
//                 date: "2025-08-20",
//                 status: "Resolved, no headaches",
//                 reason: "Consistent CPAP use and better sleep hygiene",
//                 notes: "Neurologically stable",
//                 summary: "Headaches resolved with consistent CPAP compliance and improved sleep hygiene."
//             }
//         ],
//         currentStatus: "Resolved with CPAP compliance",
//         priority: "High — secondary to untreated OSA",
//         relatedConditions: ["Sleep Apnea", "Hypertension"],
//         position: 2
//     }
// ];

// // Data model for left-pane cards based on problems (reduced)
// const visitProblems = [{
//         problem: "Sleep Apnea",
//         onset: "Diagnosed Jan 2025 (sleep study)",
//         causes: ["Obstructive airway during sleep"],
//         course: [{
//                 date: "2025-01-10",
//                 status: "Confirmed mild OSA",
//                 reason: "Sleep study results",
//                 notes: "CPAP initiated",
//                 summary: "mild OSA confirmed; CPAP started."
//             },
//             {
//                 date: "2025-04-18",
//                 status: "Non-adherence",
//                 reason: "Stopped CPAP due to mask discomfort",
//                 notes: "Headaches worsened",
//                 summary: "stopped CPAP due to mask discomfort, leading to worsening headaches."
//             },
//             {
//                 date: "2025-08-20",
//                 status: "Well controlled",
//                 reason: "Consistent CPAP compliance",
//                 notes: "Headaches resolved",
//                 summary: "OSA well controlled with CPAP; headaches resolved."
//             }
//         ],
//         currentStatus: "Stable with CPAP",
//         priority: "High — root cause of headaches",
//         relatedConditions: ["Headaches", "Hypertension"],
//         position: 1
//     },
//     {
//         problem: "Headaches",
//         onset: "Reported since 2024-11",
//         causes: ["Poor sleep / OSA", "Stopped CPAP due to mask issues"],
//         course: [{
//                 date: "2024-11-15",
//                 status: "Frequent morning headaches",
//                 reason: "Likely linked to untreated sleep apnea",
//                 notes: "Sleep study recommended",
//                 summary: "patient reported daily morning headaches, suspected to be due to sleep apnea."
//             },
//             {
//                 date: "2025-08-20",
//                 status: "Resolved, no headaches",
//                 reason: "Consistent CPAP use and better sleep hygiene",
//                 notes: "Neurologically stable",
//                 summary: "headaches resolved with consistent CPAP compliance and improved sleep hygiene."
//             }
//         ],
//         currentStatus: "Resolved with CPAP compliance",
//         priority: "High — directly tied to untreated OSA",
//         relatedConditions: ["Sleep Apnea", "Hypertension"],
//         position: 2
//     }
// ];


// // Data model for left-pane cards (5 dates)
// const visitSamples = [{
//         "date": "2025-08-20",
//         "Chief Complaint": "Routine check-up, no headaches.",
//         "History of Present Illness": "Patient reports feeling well over the past month with no headache episodes. Sleep is regular and CPAP therapy compliance is >90%. No new neurological symptoms, such as weakness, numbness, or visual disturbances.",
//         "Past Medical History": "Migraines diagnosed in 2021; mild hypertension controlled with medication; mild obstructive sleep apnea diagnosed 2025.",
//         "Past Surgical History": "Appendectomy in 2018, no complications.",
//         "Medications & Allergies": "Lisinopril 10 mg daily; no current pain medications. Allergic to penicillin (rash).",
//         "Family History": "Father has history of migraines; mother healthy.",
//         "Social History": "Non-smoker, occasional coffee, works night shifts, exercises moderately twice a week.",
//         "Review of Systems": "Denies headaches, dizziness, weakness, numbness, visual changes, speech difficulty, or syncope. No cardiovascular, respiratory, or gastrointestinal complaints.",
//         "Physical Examination": "Vital signs stable. Neurological exam normal: cranial nerves II-XII intact, strength 5/5 in all extremities, sensation intact, reflexes 2+, gait normal.",
//         "Imaging/Lab Results": "No new imaging or labs. Prior labs normal.",
//         "Assessment": "Patient is neurologically stable. Headaches resolved with adherence to CPAP and lifestyle modifications.",
//         "Plan": "Continue CPAP therapy nightly. Maintain regular sleep schedule and hydration. Encourage aerobic exercise. Annual follow-up recommended, or sooner if symptoms recur.",
//         // "Summary": "Patient is symptom-free with excellent CPAP adherence. Neurological exam normal. No headache episodes reported. Continue current management plan.",
//         "Summary": "Patient presented for routine follow-up and reports being symptom-free over the past month. Headaches have completely resolved with consistent CPAP use and improved sleep hygiene. No new neurological complaints or changes in physical examination findings. Patient demonstrates good understanding of therapy compliance and lifestyle recommendations. Continue current management and monitor periodically.",
//         "Encounter Details": {
//             "Speciality": "Neurology",
//             "Encounter ID": "20250820",
//             "Date & Time": "August 20, 2025, 10:30 AM",
//             "Encounter Status": "Completed",
//             "Encounter Duration": "30 minutes"
//         }
//     },
//     {
//         "date": "2025-06-05",
//         "Chief Complaint": "Follow-up after CPAP mask change.",
//         "History of Present Illness": "Patient reports headaches reduced to 1–2 times/week after switching to a new nasal CPAP mask. Headaches are mild, last 30–60 minutes, occasionally associated with mild photophobia. No nausea or vomiting.",
//         "Past Medical History": "Migraines, mild hypertension, mild sleep apnea.",
//         "Past Surgical History": "Appendectomy in 2018.",
//         "Medications & Allergies": "Lisinopril 10 mg daily. Allergic to penicillin (rash).",
//         "Family History": "Father has history of migraines.",
//         "Social History": "Non-smoker, occasional coffee, continues night shifts, exercises 1–2 times/week.",
//         "Review of Systems": "Positive for mild headaches; otherwise negative. Denies weakness, numbness, vision or speech changes.",
//         "Physical Examination": "Vitals stable. Neurological exam normal. Cranial nerves intact. Strength, sensation, and reflexes within normal limits. Gait normal.",
//         "Imaging/Lab Results": "No new imaging or labs; prior MRI and labs stable.",
//         "Assessment": "Significant improvement in headache frequency and severity with CPAP compliance.",
//         "Plan": "Continue CPAP nightly. Maintain reduced caffeine intake and regular sleep schedule. Follow-up in 4 months or sooner if headaches worsen.",
//         // "Summary": "Patient demonstrates significant improvement in headaches after CPAP mask change. Mild infrequent headaches remain. Neurological status stable.",
//         "Summary": "Patient presented for follow-up after CPAP mask change. Headache frequency and severity have improved significantly, now occurring only 1–2 times per week. Mild photophobia noted but otherwise symptoms well controlled. Neurological examination remains normal, and vitals stable. Patient educated on continuing therapy compliance, lifestyle modifications, and monitoring triggers. Plan to maintain current therapy and review progress at the next scheduled visit.",
//         "Encounter Details": {
//             "Speciality": "Neurology",
//             "Encounter ID": "20250605",
//             "Date & Time": "June 5, 2025, 9:00 AM",
//             "Encounter Status": "Completed",
//             "Encounter Duration": "25 minutes"
//         }
//     },
//     {
//         "date": "2025-04-18",
//         "Chief Complaint": "Increased headaches after stopping CPAP.",
//         "History of Present Illness": "Patient discontinued CPAP therapy due to mask discomfort. Reports headaches 4–5 days/week, lasting 1–2 hours, sometimes associated with light sensitivity. Denies nausea, vomiting, or new neurological deficits.",
//         "Past Medical History": "Migraines, mild hypertension, mild sleep apnea.",
//         "Past Surgical History": "Appendectomy in 2018.",
//         "Medications & Allergies": "Lisinopril 10 mg daily. Allergic to penicillin (rash).",
//         "Family History": "Father with migraines.",
//         "Social History": "Non-smoker, coffee 2x/day, night shifts continue, limited exercise.",
//         "Review of Systems": "Positive for headaches and photophobia. Denies weakness, numbness, visual or speech changes, syncope, chest pain, or shortness of breath.",
//         "Physical Examination": "Vitals: BP 142/90 mmHg. Neurological exam normal. Cranial nerves II-XII intact. Strength 5/5, sensation normal, reflexes 2+. Gait normal.",
//         "Imaging/Lab Results": "No new imaging; prior labs normal.",
//         "Assessment": "Worsening headaches likely secondary to untreated sleep apnea.",
//         "Plan": "Restart CPAP therapy with alternative mask type. Refer to sleep specialist. Recommend headache diary and monitor frequency and severity.",
//         // "Summary": "Headaches worsened after CPAP discontinuation. Neurological exam unchanged. CPAP restarted with new mask and referred for sleep follow-up.",
//         "Summary": "Patient reports worsening headaches after discontinuing CPAP therapy. Headaches now occur 4–5 times per week and are occasionally associated with photophobia. No neurological deficits were noted on examination. Education provided regarding the importance of CPAP adherence and mask selection. Referred to sleep specialist for further management and advised to keep a detailed headache diary. Therapy compliance emphasized to prevent further symptom escalation.",
//         "Encounter Details": {
//             "Speciality": "Neurology",
//             "Encounter ID": "20250418",
//             "Date & Time": "April 18, 2025, 11:00 AM",
//             "Encounter Status": "Completed",
//             "Encounter Duration": "30 minutes"
//         }
//     },
//     {
//         "date": "2025-01-10",
//         "Chief Complaint": "Follow-up for headaches after sleep study.",
//         "History of Present Illness": "Patient reports headaches decreased to twice per week since sleep schedule adjustments. Sleep study confirmed mild obstructive sleep apnea. No new neurological symptoms.",
//         "Past Medical History": "Migraines, mild hypertension, mild sleep apnea.",
//         "Past Surgical History": "Appendectomy in 2018.",
//         "Medications & Allergies": "Lisinopril 10 mg daily; started CPAP therapy. Allergic to penicillin (rash).",
//         "Family History": "Father with migraines.",
//         "Social History": "Non-smoker, reduced coffee to one cup daily, continues night shifts, exercises moderately.",
//         "Review of Systems": "Positive for occasional mild headaches; denies dizziness, weakness, numbness, or visual changes.",
//         "Physical Examination": "Vitals: BP 130/84 mmHg. Neurological exam normal. Cranial nerves intact, motor and sensory exam normal, reflexes 2+, gait steady.",
//         "Imaging/Lab Results": "Sleep study reviewed; no other imaging.",
//         "Assessment": "Improved headache control with lifestyle changes and CPAP therapy.",
//         "Plan": "Continue nightly CPAP, maintain reduced caffeine intake, monitor headache frequency, follow-up in 3 months.",
//         // "Summary": "Patient reports improved headache control with CPAP therapy and lifestyle changes. No new neurological deficits noted.",
//         "Summary": "Patient demonstrated improvement in headache frequency after adjusting sleep schedule and initiating CPAP therapy. Headaches now occur only twice per week and are mild. No new neurological deficits noted. Patient adheres well to therapy, understands lifestyle recommendations, and is motivated to continue compliance. Reinforced importance of sleep hygiene, caffeine moderation, and follow-up monitoring.",
//         "Encounter Details": {
//             "Speciality": "Neurology",
//             "Encounter ID": "20250110",
//             "Date & Time": "January 10, 2025, 2:00 PM",
//             "Encounter Status": "Completed",
//             "Encounter Duration": "20 minutes"
//         }
//     },
//     {
//         "date": "2024-11-15",
//         "Chief Complaint": "Frequent morning headaches for the past two months.",
//         "History of Present Illness": "Patient reports dull headaches almost daily, worse upon waking, lasting 1–2 hours. No associated nausea, vomiting, visual disturbances, or weakness.",
//         "Past Medical History": "Migraines diagnosed in 2021; mild hypertension.",
//         "Past Surgical History": "Appendectomy in 2018.",
//         "Medications & Allergies": "Lisinopril 10 mg daily. Allergic to penicillin (rash).",
//         "Family History": "Father with migraines.",
//         "Social History": "Non-smoker, drinks coffee twice daily, works night shifts, minimal exercise.",
//         "Review of Systems": "Positive for headaches; denies other neurological or systemic complaints.",
//         "Physical Examination": "Vitals: BP 138/88 mmHg. Neurological exam normal: cranial nerves II-XII intact, motor/sensory exam normal, reflexes 2+, gait steady.",
//         "Imaging/Lab Results": "No imaging performed; basic labs within normal limits.",
//         "Assessment": "Morning headaches likely related to poor sleep and possible sleep apnea.",
//         "Plan": "Recommend sleep study, adjust sleep schedule, monitor headache frequency.",
//         // "Summary": "Patient experiencing frequent morning headaches. Neurological exam normal. Likely related to sleep disruption. Sleep study and lifestyle adjustments recommended.",
//         "Summary": "Patient reports frequent morning headaches over the past two months, predominantly occurring upon waking and lasting 1–2 hours. Headaches are dull and not associated with neurological deficits. Examination and vitals are within normal limits. Suspected underlying sleep disruption, potentially mild sleep apnea. Sleep study recommended, lifestyle adjustments suggested, and follow-up planned to evaluate response to interventions.",
//         "Encounter Details": {
//             "Speciality": "Neurology",
//             "Encounter ID": "20241115",
//             "Date & Time": "November 15, 2024, 10:00 AM",
//             "Encounter Status": "Completed",
//             "Encounter Duration": "25 minutes"
//         }
//     }
// ];

// // Data model for left-pane cards based on the problem (3 problems)
// const visitProblems = [{
//         problem: "Sleep Apnea",
//         onset: "Diagnosed Jan 2025 (sleep study)",
//         causes: ["Obstructive airway during sleep"],
//         course: [{
//                 date: "2024-11-15",
//                 status: "Suspected sleep apnea",
//                 reason: "Morning headaches and poor sleep",
//                 notes: "Sleep study recommended",
//                 summary: "sleep apnea was suspected due to morning headaches and disrupted sleep; a sleep study was recommended."
//             },
//             {
//                 date: "2025-01-10",
//                 status: "Confirmed mild OSA",
//                 reason: "Sleep study results",
//                 notes: "CPAP initiated",
//                 summary: "diagnosis of mild obstructive sleep apnea was confirmed by sleep study; CPAP therapy was started."
//             },
//             {
//                 date: "2025-04-18",
//                 status: "Non-adherence",
//                 reason: "Stopped CPAP due to mask discomfort",
//                 notes: "Headaches worsened",
//                 summary: "patient stopped using CPAP due to mask discomfort, leading to worsening headaches."
//             },
//             {
//                 date: "2025-06-05",
//                 status: "Improved adherence",
//                 reason: "Switched to a more comfortable mask",
//                 notes: "Headaches reduced",
//                 summary: "CPAP adherence improved after switching to a more comfortable mask, resulting in fewer headaches."
//             },
//             {
//                 date: "2025-08-20",
//                 status: "Well controlled",
//                 reason: "Consistent CPAP compliance",
//                 notes: "Headaches resolved",
//                 summary: "sleep apnea became well controlled with consistent CPAP use; headaches resolved."
//             }
//         ],
//         currentStatus: "Stable with CPAP",
//         priority: "High — root cause of headaches",
//         relatedConditions: ["Headaches", "Hypertension"],
//         position: 1
//     },
//     {
//         problem: "Headaches",
//         onset: "Reported since 2024-11",
//         causes: [
//             "Poor sleep and suspected sleep apnea (2024-11)",
//             "Discontinuation of CPAP therapy (2025-04)",
//             "Non-compliance with CPAP mask due to discomfort"
//         ],
//         course: [{
//                 date: "2024-11-15",
//                 status: "Frequent morning headaches",
//                 reason: "Likely linked to untreated sleep apnea",
//                 notes: "Sleep study recommended",
//                 summary: "patient reported daily morning headaches, suspected to be due to sleep apnea."
//             },
//             {
//                 date: "2025-01-10",
//                 status: "Improved, ~2 headaches/week",
//                 reason: "Started CPAP and lifestyle changes",
//                 notes: "Adhering to therapy",
//                 summary: "headaches reduced after initiation of CPAP and lifestyle modifications."
//             },
//             {
//                 date: "2025-04-18",
//                 status: "Worsening, 4–5 headaches/week",
//                 reason: "Stopped CPAP due to mask discomfort",
//                 notes: "Restarted CPAP, referred to sleep specialist",
//                 summary: "headaches worsened after stopping CPAP due to mask issues, but therapy was restarted with referral."
//             },
//             {
//                 date: "2025-06-05",
//                 status: "Reduced to 1–2 headaches/week",
//                 reason: "Mask switched and adherence improved",
//                 notes: "Mild photophobia, otherwise stable",
//                 summary: "improved adherence with a new CPAP mask, headaches reduced."
//             },
//             {
//                 date: "2025-08-20",
//                 status: "Resolved, no headaches",
//                 reason: "Consistent CPAP use and better sleep hygiene",
//                 notes: "Neurologically stable",
//                 summary: "headaches resolved with consistent CPAP compliance and improved sleep hygiene."
//             }
//         ],
//         currentStatus: "Resolved with CPAP compliance",
//         priority: "High — directly tied to untreated sleep apnea",
//         relatedConditions: ["Sleep Apnea", "Migraines", "Hypertension"],
//         position: 2
//     },
//     // {
//     //     problem: "Hypertension",
//     //     onset: "Prior to 2024",
//     //     causes: ["Chronic condition"],
//     //     course: [{
//     //         date: "2024-11-15 → 2025-08-20",
//     //         status: "Controlled with Lisinopril",
//     //         reason: "Medication adherence",
//     //         notes: "BP stable at follow-ups"
//     //     }],
//     //     currentStatus: "Stable, well-controlled",
//     //     priority: "Medium",
//     //     relatedConditions: ["Headaches", "Sleep Apnea"],
//     //     position: 3
//     // }
// ];

// Clinical Summary data
const clinicalSummaryData = {
    title: "Outlined below is a pre-consultation brief summarizing key patient details to help guide the upcoming visit.",
    patientOverview: "CHRISTINE MYCHART is a 47-year-old female presenting for a neurological evaluation due to progressive headaches, dizziness, and cognitive concerns. ",
    chiefComplaint: "6-month history of worsening daily headaches with associated dizziness, memory difficulties, and concentration problems affecting work performance.",
    relevantMedicalHistory: {
        comorbidities: ["Hypertension (2019)", "Type 2 Diabetes (2020)", "Hyperlipidemia (2021)"],
        priorSurgery: "L4-L5 spinal fusion (2018)",
        currentMedications: ["Lisinopril 10mg daily", "Metformin 500mg BID", "PRN Ibuprofen"],
        allergies: ["Penicillin (rash)", "Sulfa drugs (hives)"]
    },
    significantFamilyHistory: {
        neurological: ["Maternal grandmother with Alzheimer's disease", "Sister with migraines"],
        cardiovascularMetabolic: ["Both parents with hypertension", "Mother with diabetes", "Father with MI at age 62"]
    },
    currentNeurologicalSymptoms: [
        { symptom: "Headaches", present: "Yes", status: "Daily, worsening", clinicalSignificance: "Primary concern - rule out secondary causes" },
        { symptom: "Dizziness", present: "Yes", status: "Present", clinicalSignificance: "May suggest vestibular or vascular etiology" },
        { symptom: "Memory Loss", present: "Yes", status: "Present", clinicalSignificance: "Concerning given family history of dementia" },
        { symptom: "Attention/Concentration", present: "Yes", status: "Impaired", clinicalSignificance: "Affecting occupational function" },
        { symptom: "Sleep Disturbance", present: "Yes", status: "Present", clinicalSignificance: "May contribute to cognitive symptoms" }
    ],
    clinicalConsiderations: {
        differentialDiagnosis: ["Tension-type vs. migraine headaches", "Medication overuse headache", "Secondary headache (given HTN/DM)", "Early cognitive impairment"],
        riskFactors: ["Multiple cardiovascular risk factors", "Positive family history for dementia and migraines"],
        redFlags: ["Progressive nature", "Cognitive symptoms", "Multiple comorbidities"]
    },
    recommendedAssessmentFocus: [
        "Detailed headache characterization (frequency, quality, triggers, associated symptoms)",
        "Cognitive screening examination",
        "Neurological examination with attention to focal deficits",
        "Blood pressure assessment and diabetic complications screening",
        "Consider neuroimaging given progressive symptoms and risk factors"
    ],
    patientGoals: "She is seeking a diagnosis and treatment plan, with particular concern about memory issues and a family history of Alzheimer's disease."
};

// Original Questionnaire data
const originalQuestionnaireData = {
    patientInformation: {
        patientName: "CHRISTINE MYCHART",
        dateOfBirth: "March 15, 1978",
        handYouWriteWith: "R (Right)"
    },
    chiefComplaint: "I've been experiencing frequent headaches for the past 6 months, along with episodes of dizziness and some memory issues. The headaches are getting worse and more frequent, occurring almost daily now. I'm also having trouble concentrating at work and sometimes feel confused about simple tasks.",
    currentMedications: [
        { medication: "Lisinopril", dosage: "10mg", frequency: "Once daily" },
        { medication: "Metformin", dosage: "500mg", frequency: "Twice daily" },
        { medication: "Ibuprofen", dosage: "400mg", frequency: "As needed for headaches" },
        // { medication: "Vitamin D3", dosage: "2000 IU", frequency: "Once daily" }
    ],
    medicationAllergies: [
        "Penicillin (causes rash)",
        "Sulfa drugs (causes hives)"
    ],
    medicalHistory: {
        currentAndPastMedicalProblems: [
            "High Blood Pressure (diagnosed 2019)",
            "Diabetes (Type 2, diagnosed 2020)",
            "High Cholesterol (diagnosed 2021)",
            "Low Back Surgery (L4-L5 fusion, 2018)"
        ],
        familyHistory: [
            "High Blood Pressure (mother, father)",
            "Diabetes (mother)",
            "Migraine (sister)",
            "Heart Disease (father - heart attack at age 62)",
            "Alzheimer's (maternal grandmother)"
        ]
    },
    socialHistory: {
        smoking: "No, never smoked",
        alcohol: "2-3 glasses of wine per week",
        heavyDrinker: "No",
        maritalStatus: "Married",
        education: "Bachelor's degree",
        occupation: "Marketing Manager"
    },
    currentSymptoms: [
        { symptom: "Headaches", present: "Yes" },
        { symptom: "Dizziness", present: "Yes" },
        { symptom: "Memory Loss", present: "Yes" },
        { symptom: "Attention Problems", present: "Yes" },
        { symptom: "Sleep Problems", present: "Yes" },
        { symptom: "Visual Changes", present: "No" },
        { symptom: "Balance Problems", present: "No" },
        { symptom: "Numbness in Hands/Feet", present: "No" }
    ],
    top3QuestionsForDoctor: [
        "Could these headaches be related to my blood pressure or diabetes?",
        "Are my memory problems something I should be worried about given my family history?",
        "What tests do I need to determine what's causing these symptoms?"
    ],
    visitGoalsAndConcerns: {
        primaryGoal: "Get a proper diagnosis for my headaches and memory issues, and develop an effective treatment plan",
        top3Concerns: [
            "The increasing frequency and severity of my headaches",
            "Memory problems affecting my work performance",
            "Family history of Alzheimer's disease and whether my symptoms are related"
        ]
    }
};

// Utility: simple html element helper
function elementCreator(tag, attrs = {}, children = []) {
    const node = document.createElement(tag);
    Object.entries(attrs).forEach(([k, v]) => {
        if (k === 'class') node.className = v;
        else if (k === 'html') node.innerHTML = v;
        else node.setAttribute(k, v);
    });
    for (const child of[].concat(children)) {
        if (child == null) continue;
        node.append(child.nodeType ? child : document.createTextNode(String(child)));
    }
    return node;
};

// Helper to normalize date strings like YYYY-M-D to YYYY-MM-DD
function normalizeDateIso(iso) {
    var d = new Date(iso);
    if (isNaN(d.getTime())) return iso;
    var y = d.getFullYear();
    var m = String(d.getMonth() + 1).padStart(2, '0');
    var day = String(d.getDate()).padStart(2, '0');
    return y + '-' + m + '-' + day;
};

function renderCards() {
    const container = document.getElementById('cards-container');
    container.innerHTML = '';
    listViewData.forEach(section => {
        const bodyChildren = [];
        if (section.entries && section.entries.length) {
            if (section.id === 'labs') {
                // Show clickable test names
                const list = elementCreator('ul', { class: 'bullets' });
                section.entries.forEach(function(test) {
                    const li = elementCreator('li', {});
                    const when = test.date ? new Date(test.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: '2-digit' }) : '';
                    const link = elementCreator('a', { href: '#', class: 'lab-test-link' }, test.label + (when ? ` — ${when}` : ''));
                    link.addEventListener('click', function(e) {
                        e.preventDefault();

                        // Close any existing lab modal before opening a new one
                        const existingModal = document.querySelector('.lab-modal-overlay') || document.querySelector('.med-modal-overlay');
                        if (existingModal) {
                            existingModal.remove();
                        }

                        openLabResultsModal(test);
                    });
                    li.append(link);
                    list.append(li);
                });
                bodyChildren.push(list);
            } else {
                const grid = elementCreator('div', { class: 'kv' });
                section.entries.forEach(function(e) {
                    grid.append(elementCreator('div', { class: 'k' }, e.label));
                    grid.append(elementCreator('div', { class: 'v' }, e.value));
                });
                bodyChildren.push(grid);
            }
        }
        if (section.bullets && section.bullets.length) {
            if (section.id === 'medications') {
                const list = elementCreator('ul', { class: 'bullets' });
                section.bullets.forEach(function(med) {
                    const li = elementCreator('li', {});
                    const link = elementCreator('a', { href: '#', class: 'medication-link' }, `${med.name} (${med.common_name})`);
                    link.addEventListener('click', function(e) {
                        e.preventDefault();

                        // Close any existing lab modal before opening a new one
                        const existingModal = document.querySelector('.lab-modal-overlay') || document.querySelector('.med-modal-overlay');
                        if (existingModal) {
                            existingModal.remove();
                        }

                        openMedicationModal(med);
                    });
                    li.append(link);
                    list.append(li);
                });
                bodyChildren.push(list);
            }
        }
        if (section.highlight && section.highlight.length) {
            const h = elementCreator('div', { class: 'highlight' });
            const hTitle = elementCreator('div', { class: 'section-title' }, 'Highlight');
            const hList = elementCreator('ul', { class: 'bullets' });
            section.highlight.forEach(function(text) { hList.append(elementCreator('li', {}, text)); });
            h.append(hTitle, hList);
            bodyChildren.push(h);
        }
        if (section.source) {
            bodyChildren.push(elementCreator('div', { class: 'source' }, 'Source: ' + section.source));
        }

        const headerChildren = [];
        if (section.icon) {
            headerChildren.push(elementCreator('span', { class: 'card-title' }, [elementCreator('img', { class: 'icon-16', src: section.icon, alt: '' }), section.title]));
        } else {
            headerChildren.push(elementCreator('span', { class: 'card-title' }, section.title));
        }

        var cardClass = 'card';
        if (section.id === 'medications') cardClass += ' card-medications';
        else if (section.id === 'labs') cardClass += ' card-labs';
        else if (section.id === 'imaging') cardClass += ' card-imaging';

        const card = elementCreator('article', { class: cardClass }, [
            elementCreator('header', { class: 'card-header' }, headerChildren),
            elementCreator('div', { class: 'card-body' }, bodyChildren),
        ]);
        container.append(card);
    });
};

function setActiveTab(tabName) {
    document.querySelectorAll('.tab').forEach(btn => {
        const isActive = btn.dataset.tab === tabName;
        btn.classList.toggle('is-active', isActive);
        btn.setAttribute('aria-selected', String(isActive));
    });
    document.querySelectorAll('.pane').forEach(p => p.classList.remove('is-active'));
    document.getElementById(`${tabName}-pane`).classList.add('is-active');
};

function attachTabHandlers() {
    document.getElementById('tab-summary').addEventListener('click', () => {
        setActiveTab('summary');
        // re-generate for current date
        var activeEl = document.querySelector('.date-chip.is-active');
        var activeDateIso = activeEl ? activeEl.dataset.iso : null;
        if (activeDateIso) generateContent(activeDateIso, 'visit');

        // renderAllVisits(visitSamples);
    });
    // document.getElementById('tab-questionnaire').addEventListener('click', () => {
    //     // setActiveTab('questionnaire');
    //     // Load questionnaire content when switching to questionnaire tab
    //     loadQuestionnaireContent();
    // });
};

function attachSummaryTabHandlers() {
    document.getElementById('tab-encounter-summary').addEventListener('click', () => {

        setActiveSummaryTab('encounter-summary');
        loadEncounterSummary();
    });
    document.getElementById('tab-questionnaire-summary').addEventListener('click', () => {
        setActiveSummaryTab('questionnaire-summary');
        loadVisitQuestionnaire();
    });
};

function setActiveSummaryTab(tabName) {
    document.querySelectorAll('.summary-tab').forEach(btn => {
        const isActive = btn.dataset.summaryTab === tabName;
        btn.classList.toggle('is-active', isActive);
        btn.setAttribute('aria-selected', String(isActive));
    });
    document.querySelectorAll('.summary-pane').forEach(p => p.classList.remove('is-active'));
    document.getElementById(`${tabName}-content`).classList.add('is-active');
};

function loadEncounterSummary() {
    const container = document.getElementById("encounter-summary-content");
    showSkeleton(container);

    // Simulate AI generation delay
    const delayMs = 1000 + Math.random() * 700;
    setTimeout(() => {
        container.innerHTML = "";

        // === Header with toggle ===
        const header = elementCreator('div', { class: 'q-header' });

        const title = elementCreator(
            'h3', { class: 'summary-title' },
            'Outlined below are prior encounters relevant to the patient’s upcoming visit for headache and sleep apnea.'
        );

        // // Toggle button
        // const toggleBtn = elementCreator(
        //     'button', { class: 'toggle-view-btn' },
        //     'Switch to Problems View'
        // );

        // Toggle button structure
        // Toggle component
        const toggleComponent = elementCreator("div", { class: "toggle-container" }, [
            elementCreator("div", { class: "toggle-wrapper" }, [
                elementCreator("div", { class: "toggle-group" }, [
                    elementCreator("div", { class: "toggle-option encounters-option active" }, [
                        elementCreator("img", {
                            class: "toggle-icon",
                            alt: "",
                            src: ICONS.bx_detail
                        }),
                        elementCreator("div", { class: "toggle-label" }, "Encounter Summary")
                    ]),
                    elementCreator("div", { class: "toggle-option problems-option" }, [
                        elementCreator("img", {
                            class: "toggle-icon",
                            alt: "",
                            src: ICONS.mdi_timeline_outline
                        }),
                        elementCreator("div", { class: "toggle-label hidden" }, "Problem View")
                    ])
                ])
            ])
        ]);


        header.append(title, toggleComponent);
        container.append(header);

        // === Content container (this will swap views) ===
        const contentContainer = elementCreator('div', { class: 'content-wrapper' });
        container.append(contentContainer);

        // === Render functions ===
        function renderEncounters() {
            contentContainer.innerHTML = ""; // clear old content

            visitSamples.forEach(enc => {
                // Create hyperlink for the date
                const dateLink = elementCreator("a", {
                    href: "#",
                    class: "encounter-date-link"
                }, enc["Encounter Details"]["Date & Time"]);

                // Wrap into a sentence: "On <a>date</a>, summary..."
                const summaryPara = elementCreator("p", { class: "encounter-summary" }, [
                    "On ", dateLink, `, ${enc.Summary}`
                ]);

                // Item container
                const item = elementCreator("div", { class: "encounter-item" }, summaryPara);

                // Click handler for opening modal
                dateLink.addEventListener("click", (e) => {
                    e.preventDefault();

                    const notes = elementCreator('div', { class: 'kv-container notes-section' });

                    // Collect extra details for this encounter
                    Object.keys(enc).forEach(function(key) {
                        if (key === 'date' || key === 'Summary' || key === 'Encounter Details') return;
                        // Only build rows for additional keys
                        const row = elementCreator('div', { class: 'kv-row' }, [
                            elementCreator('div', { class: 'k' }, key),
                            elementCreator('div', { class: 'v' }, enc[key])
                        ]);
                        notes.append(row);
                    });

                    // Build modal content
                    const contentNode = elementCreator("div", { class: "encounter-modal-content" }, [
                        elementCreator("h3", {}, "Clinical Note - " + enc["Encounter Details"]["Date & Time"]),
                        notes
                    ]);

                    // Open full-frame modal
                    openFullFrameModal(contentNode);
                });

                contentContainer.append(item);
            });
        }

        function renderProblems() {
            contentContainer.innerHTML = ""; // clear old content

            visitProblems.forEach(problem => {
                // --- Header Row ---
                const header = elementCreator("div", { class: "problem-header" }, [
                    elementCreator("h3", {}, problem.problem),
                    // copyButton
                ]);

                // --- Quick Summary (paragraph with date hyperlinks) ---
                const summary = elementCreator("div", { class: "problem-summary" }, [
                    elementCreator("h4", {}, "Summary"),
                    (() => {
                        const para = elementCreator("p", {}, []);

                        problem.course.forEach((ev, idx) => {
                            // format date
                            const formattedDate = new Date(ev.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric"
                            });

                            // create hyperlink with readable date
                            const dateLink = elementCreator("a", {
                                href: "#",
                                class: "encounter-date-link"
                            }, formattedDate);

                            // click handler
                            dateLink.addEventListener("click", (e) => {
                                e.preventDefault();
                                const matchingEnc = visitSamples.find(v => (v.date || "").startsWith(ev.date));
                                if (matchingEnc) {
                                    const notes = elementCreator('div', { class: 'kv-container notes-section' });
                                    Object.keys(matchingEnc).forEach(function(key) {
                                        if (key === 'date' || key === 'Summary' || key === 'Encounter Details') return;
                                        const row = elementCreator('div', { class: 'kv-row' }, [
                                            elementCreator('div', { class: 'k' }, key),
                                            elementCreator('div', { class: 'v' }, matchingEnc[key])
                                        ]);
                                        notes.append(row);
                                    });
                                    const contentNode = elementCreator("div", { class: "encounter-modal-content" }, [
                                        elementCreator("h3", {}, "Clinical Note - " + ((matchingEnc["Encounter Details"] && matchingEnc["Encounter Details"]["Date & Time"]) || formattedDate)),
                                        notes
                                    ]);
                                    openFullFrameModal(contentNode);
                                }
                            });

                            // add narrative text
                            para.append(
                                document.createTextNode(idx === 0 ? "On " : " Then on "),
                                dateLink,
                                // document.createTextNode(`, ${ev.summary} `)
                                document.createTextNode(`, ${ev.status.toLowerCase()} (${ev.reason}). `)
                            );
                        });

                        return para;
                    })()
                ]);

                // Cloning the chief complaint, assessment, and plan to the visitProblems JSON
                problem.course = problem.course.map(ev => {
                    // find matching encounter in visitSamples by date
                    const sample = visitSamples.find(v => v.date === ev.date);
                    if (sample) {
                        return {
                            ...ev,
                            chief_complaint: sample["Chief Complaint"] || ev.chief_complaint,
                            assessment: sample["Assessment"] || ev.assessment,
                            plan: sample["Plan"] || ev.plan
                        };
                    }
                    return ev; // fallback to existing if not found
                });

                // --- Collapsible Details ---
                const details = elementCreator("div", { class: "problem-details hidden" }, [
                    elementCreator("div", { class: "problem-course" }, [
                        elementCreator("h4", {}, "Course Timeline"),
                        elementCreator("ul", { class: "timeline" }, problem.course.map(ev => {
                            const dateLink = elementCreator("a", { href: "#", class: "timeline-date encounter-date-link" }, ev.date);

                            // modal opening logic same as before...
                            dateLink.addEventListener("click", (e) => {
                                e.preventDefault();
                                const matchingEnc = visitSamples.find(v => (v.date || "").startsWith(ev.date));
                                if (matchingEnc) {
                                    const notes = elementCreator('div', { class: 'kv-container notes-section' });
                                    Object.keys(matchingEnc).forEach(function(key) {
                                        if (key === 'date' || key === 'Summary' || key === 'Encounter Details') return;
                                        const row = elementCreator('div', { class: 'kv-row' }, [
                                            elementCreator('div', { class: 'k' }, key),
                                            elementCreator('div', { class: 'v' }, matchingEnc[key])
                                        ]);
                                        notes.append(row);
                                    });
                                    const contentNode = elementCreator("div", { class: "encounter-modal-content" }, [
                                        elementCreator("h3", {}, "Clinical Note - " + ((matchingEnc["Encounter Details"] && matchingEnc["Encounter Details"]["Date & Time"]) || ev.date)),
                                        notes
                                    ]);
                                    openFullFrameModal(contentNode);
                                }
                            });

                            // --- Copy Button ---
                            const copyButton = elementCreator("button", { class: "copy-btn" }, "Copy");

                            // Attach click handler separately
                            copyButton.addEventListener("click", () => {
                                // Find the container (adjust selector if needed)
                                const container = copyButton.closest(".problem-card");

                                // Now get the respective fields inside this container
                                const summaryEl = container.querySelector('.problem-summary p');

                                const timelineItem = copyButton.closest(".timeline-item");
                                if (!timelineItem) return;

                                // get the timeline-content inside this timeline item
                                const timelineEl = timelineItem.querySelector(".timeline-content");
                                if (!timelineEl) return;

                                const textToCopy =
                                    (summaryEl ? summaryEl.innerText : '') + '\n\n' +
                                    (timelineEl ? timelineEl.innerText.replace(
                                        /[\u{1F300}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]\s*/gu,
                                        ""
                                    ) : '');

                                navigator.clipboard.writeText(textToCopy).then(() => {
                                    copyButton.innerHTML = "Copied";
                                    copyButton.style.backgroundColor = "#299029";
                                    copyButton.style.color = "#fff";
                                    setTimeout(() => {
                                        copyButton.innerHTML = "Copy";
                                        copyButton.style.backgroundColor = "";
                                        copyButton.style.color = "";
                                    }, 2000);
                                }).catch(err => console.error("Clipboard write failed:", err));
                            });

                            return elementCreator("li", { class: "timeline-item" }, [
                                dateLink,
                                copyButton,
                                elementCreator("div", { class: "timeline-content" }, [
                                    elementCreator("p", {}, "🩺 Chief Complaint: " + ev.chief_complaint),
                                    elementCreator("p", {}, "🧾 Assessment: " + ev.assessment),
                                    elementCreator("p", {}, "📝 Plan: " + ev.plan)
                                ])
                            ]);
                        }))
                    ])
                ]);


                // --- Toggle Button ---
                const toggleBtn = elementCreator("button", { class: "toggle-btn" }, "View Details");

                // Attach click handler separately
                toggleBtn.addEventListener("click", () => {
                    const isHidden = details.classList.toggle("hidden");
                    toggleBtn.textContent = isHidden ? "View Details" : "Hide Details";
                });


                // --- Card ---
                const item = elementCreator("div", { class: "problem-card" }, [
                    header,
                    summary,
                    toggleBtn,
                    details
                ]);

                contentContainer.append(item);
            });


            // Helper function to make a nicely formatted note instead of raw JSON
            function formatProblemText(problem) {
                let text = `${problem.problem}\nOnset: ${problem.onset}\nStatus: ${problem.currentStatus}\nPriority: ${problem.priority}\n\nCauses:\n- ${problem.causes.join("\n- ")}\n\nTimeline:\n`;
                problem.course.forEach(ev => {
                    text += `• ${ev.date}: ${ev.status} (Reason: ${ev.reason}; Notes: ${ev.notes})\n`;
                });
                text += `\nRelated: ${problem.relatedConditions.join(", ")}`;
                return text;
            }

        }

        // === Toggle Logic ===
        // let showingEncounters = true;
        // renderEncounters(); // default view

        // toggleBtn.addEventListener("click", () => {
        //     showingEncounters = !showingEncounters;
        //     if (showingEncounters) {
        //         renderEncounters();
        //         toggleBtn.textContent = "Switch to Problems View";
        //     } else {
        //         renderProblems();
        //         toggleBtn.textContent = "Switch to Encounters View";
        //     }
        // });

        // Attach toggle behavior
        const encountersOption = toggleComponent.querySelector(".encounters-option");
        let showingEncounters = true;
        renderEncounters(); // default view

        const problemsOption = toggleComponent.querySelector(".problems-option");


        encountersOption.addEventListener("click", () => {
            if (!showingEncounters) {
                showingEncounters = true;
                encountersOption.querySelector(".toggle-label").classList.toggle("hidden");
                problemsOption.querySelector(".toggle-label").classList.toggle("hidden");
                renderEncounters();
                encountersOption.classList.add("active");
                problemsOption.classList.remove("active");
            }
        });

        problemsOption.addEventListener("click", () => {
            if (showingEncounters) {
                showingEncounters = false;
                encountersOption.querySelector(".toggle-label").classList.toggle("hidden");
                problemsOption.querySelector(".toggle-label").classList.toggle("hidden");
                renderProblems();
                problemsOption.classList.add("active");
                encountersOption.classList.remove("active");
            }
        });


        // const header = elementCreator('div', { class: 'q-header' });
        // // const title = elementCreator('h3', { class: 'summary-title' }, 'Encounter Summary');
        // const title = elementCreator('h3', { class: 'summary-title' }, 'Outlined below are prior encounters relevant to the patient’s upcoming visit for headache and memory difficulties.');
        // header.append(title);
        // container.append(header);

        // visitSamples.forEach(enc => {

        //     // Create hyperlink for the date
        //     const dateLink = elementCreator("a", {
        //         href: "#",
        //         class: "encounter-date-link"
        //     }, enc["Encounter Details"]["Date & Time"]);


        //     // Wrap into a sentence: "On <a>date</a>, summary..."
        //     const summaryPara = elementCreator("p", { class: "encounter-summary" }, [
        //         "On ", dateLink, `, ${enc.Summary}`
        //     ]);

        //     // Item container
        //     const item = elementCreator("div", { class: "encounter-item" }, summaryPara);

        //     // Click handler for opening modal
        //     dateLink.addEventListener("click", (e) => {
        //         e.preventDefault();

        //         const notes = elementCreator('div', { class: 'kv-container notes-section' });

        //         // Collect extra details for this encounter
        //         Object.keys(enc).forEach(function(key) {
        //             if (key === 'date' || key === 'Summary' || key === 'Encounter Details') return;
        //             // Only build rows for additional keys
        //             const row = elementCreator('div', { class: 'kv-row' }, [
        //                 elementCreator('div', { class: 'k' }, key),
        //                 elementCreator('div', { class: 'v' }, enc[key])
        //             ]);
        //             notes.append(row);
        //         });

        //         // Build modal content
        //         const contentNode = elementCreator("div", { class: "encounter-modal-content" }, [
        //             elementCreator("h3", {}, "Clinical Note - " + enc["Encounter Details"]["Date & Time"]),
        //             notes
        //         ]);

        //         // Open full-frame modal
        //         openFullFrameModal(contentNode);
        //     });

        //     container.append(item);
        // });

        // visitProblems.forEach(problem => {});

    }, delayMs);
}


/* ----- Modal Popup for Clinical Note ----- */
function openClinicalNoteModal(enc) {
    const overlay = elementCreator("div", { class: "modal-overlay" });
    const sheet = elementCreator("div", { class: "modal-sheet" });
    const closeBtn = elementCreator("button", { class: "modal-close" }, "×");
    closeBtn.addEventListener("click", () => overlay.remove());

    sheet.append(
        closeBtn,
        elementCreator("h3", {}, "Clinical Note - " + enc["Encounter Details"]["Date & Time"]),
        elementCreator("p", {}, enc.Summary)
    );
    overlay.append(sheet);
    document.body.append(overlay);
}


function attachQuestionnaireTabHandlers() {
    document.getElementById('tab-visit-questionnaire').addEventListener('click', () => {
        setActiveQuestionnaireTab('visit-questionnaire');
        loadVisitQuestionnaire();
    });
    document.getElementById('tab-patient-questionnaire').addEventListener('click', () => {
        setActiveQuestionnaireTab('patient-questionnaire');
        loadPatientQuestionnaire();
    });
};

function setActiveQuestionnaireTab(tabName) {
    document.querySelectorAll('.questionnaire-tab').forEach(btn => {
        const isActive = btn.dataset.questionnaireTab === tabName;
        btn.classList.toggle('is-active', isActive);
        btn.setAttribute('aria-selected', String(isActive));
    });
    document.querySelectorAll('.questionnaire-pane').forEach(p => p.classList.remove('is-active'));
    document.getElementById(`${tabName}-content`).classList.add('is-active');
};

function selectDate(iso, chip) {
    document.querySelectorAll('.date-chip').forEach(c => {
        c.classList.toggle('is-active', c === chip);
        c.setAttribute('aria-selected', String(c === chip));
    });
    document.querySelectorAll('.date-pill').forEach(pill => {
        const isActive = normalizeDateIso(pill.dataset.iso) === normalizeDateIso(iso);
        pill.classList.toggle('is-active', isActive);
        pill.setAttribute('aria-pressed', String(isActive));
    });
    var activeTabEl = document.querySelector('.tab.is-active');
    const tab = activeTabEl ? activeTabEl.dataset.tab : 'visit';
    generateContent(iso, tab);

    // renderAllVisits(visitSamples);
};

function showSkeleton(container) {
    container.innerHTML = '';

    // Enhanced AI loading header with icon
    const header = elementCreator('div', { class: 'ai-loading' }, [
        elementCreator('span', {}, '✨ Analyzing your data'),
        elementCreator('div', { class: 'dot' }),
        elementCreator('div', { class: 'dot' }),
        elementCreator('div', { class: 'dot' }),
        elementCreator('div', { class: 'dot' })
    ]);

    // More sophisticated skeleton structure
    const s = elementCreator('div', { class: 'skeleton' }, [
        // Title line
        elementCreator('div', { class: 'line w-70' }),
        // Subtitle
        elementCreator('div', { class: 'line w-50' }),
        // Content block 1
        elementCreator('div', { class: 'line w-90' }),
        elementCreator('div', { class: 'line w-85' }),
        elementCreator('div', { class: 'line w-80' }),
        // Content block 2
        elementCreator('div', { class: 'line w-75' }),
        elementCreator('div', { class: 'line w-60' }),
        // Content block 3
        elementCreator('div', { class: 'line w-90' }),
        elementCreator('div', { class: 'line w-70' }),
        elementCreator('div', { class: 'line w-40' }),
    ]);

    container.append(header, s);
};


function generateContent(iso, tab) {
    // const containerId = tab === 'summary' ? 'summary-pane' : 'questionnaire-pane';
    // const container = document.getElementById(containerId);
    // showSkeleton(container);

    // Simulate AI generation delay
    const delayMs = 1000 + Math.random() * 700;
    setTimeout(() => {
        // const dateFmt = new Date(iso).toLocaleDateString(undefined, {
        //     year: 'numeric',
        //     month: 'short',
        //     day: '2-digit'
        // });
        var content;
        if (tab === 'summary') {

            // // For single visit
            // // Find matching visit data by normalized date
            //  var targetIso = normalizeDateIso(iso);
            // var visitData = null;
            // for (var i = 0; i < visitSamples.length; i++) {
            //     if (normalizeDateIso(visitSamples[i].date) === targetIso) {
            //         visitData = visitSamples[i];
            //         break;
            //     }
            // }
            // if (!visitData) {
            //     // Fallback to first entry if no match
            //     visitData = visitSamples[0];
            // }
            // content = renderVisitSummaryFromJSON(visitData, dateFmt);

            // // Insert horizontal date pills above content per design
            // const pills = elementCreator('div', { class: 'date-pills' });
            // visitDates.forEach(function(dIso, idx) {
            //     const d = new Date(dIso);
            //     const label = d.toLocaleDateString(undefined, { month: 'short', day: '2-digit' });
            //     const pill = elementCreator('button', { class: 'date-pill', 'aria-pressed': 'false' });
            //     pill.dataset.iso = dIso;
            //     const dateLine = elementCreator('span', { class: 'date-line' }, label);
            //     const status = 'Completed';
            //     const statusLine = elementCreator('span', { class: 'status-line' }, status);
            //     pill.append(dateLine, statusLine);
            //     pill.addEventListener('click', function() { selectDate(dIso); });
            //     if (normalizeDateIso(dIso) === normalizeDateIso(iso)) {
            //         pill.classList.add('is-active');
            //         pill.setAttribute('aria-pressed', 'true');
            //     }
            //     pills.append(pill);
            // });

            // // For all visits
            // content = renderAllVisits(visitSamples);

            // const wrapDiv = elementCreator('div');
            // // wrapDiv.append(pills, content);
            // wrapDiv.append(content);
            // content = wrapDiv;

            loadEncounterSummary();
            return;
        } else {
            // Questionnaire content is now handled separately
            loadQuestionnaireContent();
            return;
        }
        // container.innerHTML = '';
        // container.append(content);
    }, delayMs);
};

function renderAllVisits(visits) {
    const wrap = elementCreator('div', { class: 'prose' });

    visits.forEach(v => {
        const dateFmt = new Date(v.date).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'short',
            day: '2-digit'
        });
        wrap.append(renderVisitSummaryFromJSON(v, dateFmt));
    });

    return wrap;
}


function loadSummaryContent() {
    setActiveSummaryTab('encounter-summary');
    loadVisitSummary();
};

function loadQuestionnaireContent() {
    // Load the default questionnaire tab (visit questionnaire)
    setActiveQuestionnaireTab('visit-questionnaire');
    loadVisitQuestionnaire();
};

function loadVisitSummary() {
    const container = document.getElementById('encounter-summary-content');
    showSkeleton(container);

    // Simulate AI generation delay
    const delayMs = 1000 + Math.random() * 500;
    setTimeout(() => {
        // Intake shows summarised questionnaire with actions (view original + download)
        const content = generateContent(visitDates[0], 'summary');
        container.innerHTML = '';
        container.append(content);
    }, delayMs);
};


function loadVisitQuestionnaire() {
    const container = document.getElementById('questionnaire-summary-content');
    showSkeleton(container);

    // Simulate AI generation delay
    const delayMs = 1000 + Math.random() * 500;
    setTimeout(() => {
        // Intake shows summarised questionnaire with actions (view original + download)
        const content = renderClinicalSummary();
        container.innerHTML = '';
        container.append(content);
    }, delayMs);
};

function loadPatientQuestionnaire() {
    const container = document.getElementById('patient-questionnaire-content');
    showSkeleton(container);

    // Simulate AI generation delay
    const delayMs = 1000 + Math.random() * 500;
    setTimeout(() => {
        const content = renderCompletedFromQuestionnaireResponse(sampleQuestionnaireResponse);
        container.innerHTML = '';
        container.append(content);
    }, delayMs);
};

// Sample QuestionnaireResponse used for Patient Completed summary/accordion
const sampleQuestionnaireResponse = {
    "resourceType": "QuestionnaireResponse",
    "id": "eLT3wmcSO-FnPHnHQ2FkBbQ3",
    "identifier": { "system": "urn:oid:1.2.840.114350.1.13.5325.1.7.2.728165", "value": "106731" },
    "questionnaire": "Questionnaire/eU7pqmsZY1Mzn5Q6N3sr5CypVI-gW8oj3qZkRi4fCIS83",
    "status": "Completed",
    "subject": { "reference": "Patient/eBJiv3SI2EuZFZSbARSALJz1qvR2nrHiiztqv0dgm9yM3", "display": "MYCHART, CHRISTINE" },
    "encounter": { "reference": "Encounter/et2BlG8rMcWAICw5GbF58AP2Qdnk9wkJy2jt1u7cM5Mg3" },
    "authoredISO": "2025-08-20T21:08:11Z",
    "authored": "August 20, 2025 at 9:08 PM UTC",
    "source": { "reference": "Patient/eBJiv3SI2EuZFZSbARSALJz1qvR2nrHiiztqv0dgm9yM3", "display": "MYCHART, CHRISTINE" },
    "item": [
        { "linkId": "325236236|220423|55545", "text": "On a scale from one to ten, rate your back pain in severity (range: 1 - 10)", "answer": [{ "valueDecimal": 7 }] },
        { "linkId": "325236236|220424|55545", "text": "When did you notice your back pain intensify?", "answer": [{ "valueDate": "2024-08-08" }] },
        { "linkId": "325236236|220425|55545", "text": "When do you experience the most back pain?", "answer": [{ "valueString": "At morning" }] },
        { "linkId": "325236236|220426|55545", "text": "Have the prescribed medications improved your back pain since?", "answer": [{ "valueBoolean": true }] },
        { "linkId": "19393311|150297|55545", "text": " (range: 0 - 3)", "answer": [{ "extension": [{ "valueString": "This is a score of 3", "url": "http://open.epic.com/FHIR/StructureDefinition/extension/scoring-answer-description" }], "valueDecimal": 3 }] }
    ]
};

function summariseQuestionnaireResponse(qr) {
    if (!qr || !qr.item) return 'No questionnaire response available.';
    const ansMap = {};
    qr.item.forEach(it => {
        const a = (it.answer || [])[0] || {};
        const key = it.text || it.linkId;
        let val = '';
        if (typeof a.valueString !== 'undefined') val = a.valueString;
        else if (typeof a.valueDecimal !== 'undefined') val = String(a.valueDecimal);
        else if (typeof a.valueDate !== 'undefined') val = a.valueDate;
        else if (typeof a.valueBoolean !== 'undefined') val = a.valueBoolean ? 'Yes' : 'No';
        ansMap[key] = val;
    });
    const sev = Object.keys(ansMap).find(k => k.toLowerCase().includes('scale'));
    const whenMost = Object.keys(ansMap).find(k => k.toLowerCase().includes('most back pain'));
    const intensified = Object.keys(ansMap).find(k => k.toLowerCase().includes('intensify'));
    const meds = Object.keys(ansMap).find(k => k.toLowerCase().includes('medications improved'));
    const score = Object.keys(ansMap).find(k => k.trim() === '(range: 0 - 3)');
    return `Patient reports back pain severity 7/10, worsening since 08 Aug 2024. Pain is most severe in the morning. Current medications are helpful. Functional impact score: 3/3.`;
}

function renderCompletedFromQuestionnaireResponse(qr) {
    const wrap = elementCreator('div', { class: 'prose' });

    // Header with actions like other sections
    const header = elementCreator('div', { class: 'q-header' });
    header.append(
        elementCreator('h3', {}, 'Patient Completed Questionnaire'),
        // elementCreator('div', { class: 'q-actions' }, [
        //     elementCreator('button', { class: 'q-link', type: 'button' }, [elementCreator('img', { class: 'icon-16', src: ICONS.view, alt: '' }), elementCreator('span', {}, 'View Original')]),
        //     elementCreator('button', { class: 'q-link', type: 'button' }, [elementCreator('img', { class: 'icon-16', src: ICONS.download, alt: '' }), elementCreator('span', {}, 'Download PDF')])
        // ])
    );
    wrap.append(header);

    // const actions = header.querySelectorAll('button.q-link');
    // actions[0].addEventListener('click', function() { openFullFrameModal(renderPatientQuestionnaireContent()); });
    // actions[1].addEventListener('click', function() { downloadQuestionnaire('patient-questionnaire-christine-mychart.pdf'); });

    // Summary accordion
    const summaryText = summariseQuestionnaireResponse(qr);
    const summaryBox = elementCreator('div', { class: 'summary-box' }, summaryText);
    wrap.append((function() {
        const acc = elementCreator('div', { class: 'accordion' });
        const headerBtn = elementCreator('button', { class: 'accordion-header is-open', 'aria-expanded': 'true' }, [
            elementCreator('img', { class: 'chevron-icon', src: ICONS.chevronDown, alt: '' }),
            elementCreator('span', { class: 'accordion-title' }, 'Summary')
        ]);
        const body = elementCreator('div', { class: 'accordion-content', style: 'display:block;' });
        body.append(summaryBox);
        headerBtn.addEventListener('click', function() {
            const shown = body.style.display !== 'none';
            body.style.display = shown ? 'none' : 'block';
            headerBtn.setAttribute('aria-expanded', String(!shown));
            headerBtn.classList.toggle('is-open', !shown);
        });
        acc.append(headerBtn, body);
        return acc;
    })());

    // Accordion with parsed Q/A rows
    const dataDiv = elementCreator('div', {});
    const meta = elementCreator('div', { class: 'kv' });
    meta.append(
        elementCreator('div', { class: 'k' }, 'Patient'), elementCreator('div', { class: 'v' }, (qr.subject && qr.subject.display) || '—'),
        elementCreator('div', { class: 'k' }, 'Authored'), elementCreator('div', { class: 'v' }, qr.authored || '—'),
        elementCreator('div', { class: 'k' }, 'Status'), elementCreator('div', { class: 'v' }, qr.status || '—')
    );
    dataDiv.append(meta);

    // const table = elementCreator('table', {}, [
    //     elementCreator('thead', {}, elementCreator('tr', {}, [
    //         elementCreator('th', {}, 'QUESTION'),
    //         elementCreator('th', {}, 'ANSWER')
    //     ])),
    //     elementCreator('tbody', {}, (qr.item || []).map(it => {
    //         const a = (it.answer || [])[0] || {};
    //         let val = '';
    //         if (typeof a.valueString !== 'undefined') val = a.valueString;
    //         else if (typeof a.valueDecimal !== 'undefined') val = String(a.valueDecimal);
    //         else if (typeof a.valueDate !== 'undefined') val = a.valueDate;
    //         else if (typeof a.valueBoolean !== 'undefined') val = a.valueBoolean ? 'Yes' : 'No';
    //         else val = '—';
    //         return elementCreator('tr', {}, [
    //             elementCreator('td', {}, it.text || it.linkId),
    //             elementCreator('td', {}, val)
    //         ]);
    //     }))
    // ]);
    const table = elementCreator('table', { style: 'border-collapse: collapse; width: 100%;' }, [
        elementCreator('thead', {}, elementCreator('tr', {}, [
            elementCreator('th', { style: 'text-align: left; padding: 8px 12px 8px 24px;' }, 'QUESTION'),
            elementCreator('th', { style: 'text-align: left; padding: 8px 12px 8px 24px;' }, 'ANSWER')
        ])),
        elementCreator('tbody', {}, (qr.item || []).map(it => {
            const a = (it.answer || [])[0] || {};
            let val = '';
            if (typeof a.valueString !== 'undefined') val = a.valueString;
            else if (typeof a.valueDecimal !== 'undefined') val = String(a.valueDecimal);
            else if (typeof a.valueDate !== 'undefined') val = a.valueDate;
            else if (typeof a.valueBoolean !== 'undefined') val = a.valueBoolean ? 'Yes' : 'No';
            else val = '—';
            return elementCreator('tr', {}, [
                elementCreator('td', { style: 'padding: 8px 12px 8px 24px;' }, it.text || it.linkId),
                elementCreator('td', { style: 'padding: 8px 12px 8px 24px;' }, val)
            ]);
        }))
    ]);
    dataDiv.append(table);

    // Local accordion creator mirroring visit summary style
    function createAccordion(titleText, contentNode, isOpen) {
        const acc = elementCreator('div', { class: 'accordion' });
        const chevron = elementCreator('img', { class: 'chevron-icon', src: ICONS.chevronDown, alt: '' });
        const header = elementCreator('button', { class: `accordion-header ${isOpen ? 'is-open' : ''}`, 'aria-expanded': String(!!isOpen) }, [
            chevron,
            elementCreator('span', { class: 'accordion-title' }, titleText)
        ]);
        const body = elementCreator('div', { class: 'accordion-content', style: isOpen ? 'display:block;' : 'display:none;' });
        body.append(contentNode);
        header.addEventListener('click', function() {
            const isShown = body.style.display !== 'none';
            const willShow = !isShown;
            body.style.display = willShow ? 'block' : 'none';
            header.setAttribute('aria-expanded', String(willShow));
            header.classList.toggle('is-open', willShow);
        });
        acc.append(header, body);
        return acc;
    }

    wrap.append(createAccordion('Questionnaire Data', dataDiv, false));
    return wrap;
}

function renderVisitSummaryFromJSON(data, dateLabel) {
    const wrap = elementCreator('div', { class: 'prose' });

    // Encounter details rendered as compact card with 5-column row
    var encounter = data['Encounter Details'];
    if (encounter) {
        const card = elementCreator('article', { class: 'encounter-card' });
        const header = elementCreator('header', {}, [
            elementCreator('span', {}, 'Encounter Details'),
            elementCreator('span', { class: 'encounter-date-chip' }, [elementCreator('img', { style: 'margin-right: 8px;margin-left: 5px;', src: ICONS.clock, alt: '' }), dateLabel])
        ]);
        const grid = elementCreator('div', { class: 'encounter-grid' });
        const fields = ['Speciality', 'Encounter ID', 'Date & Time', 'Encounter Status', 'Encounter Duration'];
        for (var i = 0; i < fields.length; i++) {
            const key = fields[i];
            const value = encounter[key] || '';
            const item = elementCreator('div', { class: 'encounter-item' }, [
                elementCreator('div', { class: 'label' }, key),
                elementCreator('div', { class: 'value' + (key === 'Encounter Status' ? ' status' : '') }, value)
            ]);
            grid.append(item);
        }
        card.append(header, grid);
        wrap.append(card);
    }

    // Accordions: Summary (open) and Clinical Note (closed)
    function createAccordion(titleText, contentNode, isOpen) {
        const acc = elementCreator('div', { class: 'accordion' });
        const chevron = elementCreator('img', { class: 'chevron-icon', src: ICONS.chevronDown, alt: '' });
        const header = elementCreator('button', { class: `accordion-header ${isOpen ? 'is-open' : ''}`, 'aria-expanded': String(!!isOpen) }, [
            chevron,
            elementCreator('span', { class: 'accordion-title' }, titleText)
        ]);
        const body = elementCreator('div', { class: 'accordion-content', style: isOpen ? 'display:block;' : 'display:none;' });
        body.append(contentNode);
        header.addEventListener('click', function() {
            const isShown = body.style.display !== 'none';
            const willShow = !isShown;
            body.style.display = willShow ? 'block' : 'none';
            header.setAttribute('aria-expanded', String(willShow));
            header.classList.toggle('is-open', willShow);
        });
        acc.append(header, body);
        return acc;
    }

    // Summary section (open by default)
    if (data['Summary']) {
        var summaryBox = elementCreator('div', { class: 'summary-box' }, data['Summary']);
        wrap.append(createAccordion('Summary', summaryBox, true));
    }

    // Clinical Note (collapsed by default) - includes all remaining fields
    var notes = elementCreator('div', { class: 'kv-container notes-section' });
    Object.keys(data).forEach(function(key) {
        if (key === 'date' || key === 'Summary' || key === 'Encounter Details') return;
        var row = elementCreator('div', { class: 'kv-row' }, [
            elementCreator('div', { class: 'k' }, key),
            elementCreator('div', { class: 'v' }, data[key])
        ]);
        notes.append(row);
    });
    wrap.append(createAccordion('Clinical Note', notes, false));

    return wrap;
};

// function renderClinicalSummary() {
//     const wrap = elementCreator('div', { class: 'clinical-summary' });

//     // Header with actions (View Original, Download PDF)
//     const header = elementCreator('div', { class: 'q-header' });
//     const title = elementCreator('h3', {}, clinicalSummaryData.title);
//     const actions = elementCreator('div', { class: 'q-actions' });
//     const viewOriginal = elementCreator('button', { class: 'q-link', type: 'button' }, [
//         elementCreator('img', { class: 'icon-16', src: ICONS.view, alt: '' }),
//         elementCreator('span', {}, 'View Original')
//     ]);
//     const downloadBtn = elementCreator('button', { class: 'q-link', type: 'button' }, [
//         elementCreator('img', { class: 'icon-16', src: ICONS.download, alt: '' }),
//         elementCreator('span', {}, 'Download PDF')
//     ]);
//     actions.append(viewOriginal, downloadBtn);
//     header.append(title, actions);
//     wrap.append(header);

//     // Patient Overview
//     const patientOverview = elementCreator('h4', {}, 'Patient Overview');
//     const patientOverviewText = elementCreator('p', {}, clinicalSummaryData.patientOverview);
//     wrap.append(patientOverview, patientOverviewText);

//     // Patient Goals
//     const patientGoals = elementCreator('h4', {}, 'Patient Goals');
//     const patientGoalsText = elementCreator('p', {}, clinicalSummaryData.patientGoals);
//     wrap.append(patientGoals, patientGoalsText);

//     // Chief Complaint
//     const chiefComplaint = elementCreator('h4', {}, 'Chief Complaint');
//     const chiefComplaintText = elementCreator('p', {}, clinicalSummaryData.chiefComplaint);
//     wrap.append(chiefComplaint, chiefComplaintText);

//     // Relevant Medical History
//     const relevantMedicalHistory = elementCreator('h4', {}, 'Relevant Medical History');
//     const relevantMedicalHistoryList = elementCreator('ul', {}, [
//         elementCreator('li', {}, 'Comorbidities: ' + clinicalSummaryData.relevantMedicalHistory.comorbidities.join(', ')),
//         elementCreator('li', {}, 'Prior Surgery: ' + clinicalSummaryData.relevantMedicalHistory.priorSurgery),
//         elementCreator('li', {}, 'Current Medications: ' + clinicalSummaryData.relevantMedicalHistory.currentMedications.join(', ')),
//         elementCreator('li', {}, 'Allergies: ' + clinicalSummaryData.relevantMedicalHistory.allergies.join(', '))
//     ]);
//     wrap.append(relevantMedicalHistory, relevantMedicalHistoryList);

//     // Significant Family History
//     const significantFamilyHistory = elementCreator('h4', {}, 'Significant Family History');
//     const significantFamilyHistoryList = elementCreator('ul', {}, [
//         elementCreator('li', {}, 'Neurological: ' + clinicalSummaryData.significantFamilyHistory.neurological.join(', ')),
//         elementCreator('li', {}, 'Cardiovascular/Metabolic: ' + clinicalSummaryData.significantFamilyHistory.cardiovascularMetabolic.join(', '))
//     ]);
//     wrap.append(significantFamilyHistory, significantFamilyHistoryList);

//     // Current Neurological Symptoms Table
//     const currentNeurologicalSymptoms = elementCreator('h4', {}, 'Current Neurological Symptoms');
//     const symptomsTable = elementCreator('table', {}, [
//         elementCreator('thead', {}, elementCreator('tr', {}, [
//             elementCreator('th', {}, 'SYMPTOM'),
//             elementCreator('th', {}, 'STATUS'),
//             elementCreator('th', {}, 'CLINICAL SIGNIFICANCE')
//         ])),
//         elementCreator('tbody', {}, clinicalSummaryData.currentNeurologicalSymptoms.map(symptom =>
//             elementCreator('tr', {}, [
//                 elementCreator('td', {}, symptom.symptom),
//                 elementCreator('td', {}, symptom.status),
//                 elementCreator('td', {}, symptom.clinicalSignificance)
//             ])
//         ))
//     ]);
//     wrap.append(currentNeurologicalSymptoms, symptomsTable);

//     // Clinical Considerations
//     const clinicalConsiderations = elementCreator('h4', {}, 'Clinical Considerations');
//     const clinicalConsiderationsList = elementCreator('ul', {}, [
//         elementCreator('li', {}, 'Differential Diagnosis: ' + clinicalSummaryData.clinicalConsiderations.differentialDiagnosis.join(', ')),
//         elementCreator('li', {}, 'Risk Factors: ' + clinicalSummaryData.clinicalConsiderations.riskFactors.join(', ')),
//         elementCreator('li', {}, 'Red Flags: ' + clinicalSummaryData.clinicalConsiderations.redFlags.join(', '))
//     ]);
//     wrap.append(clinicalConsiderations, clinicalConsiderationsList);

//     // Recommended Assessment Focus
//     const recommendedAssessmentFocus = elementCreator('h4', {}, 'Recommended Assessment Focus');
//     const recommendedAssessmentFocusList = elementCreator('ul', {},
//         clinicalSummaryData.recommendedAssessmentFocus.map(item => elementCreator('li', {}, item))
//     );
//     wrap.append(recommendedAssessmentFocus, recommendedAssessmentFocusList);

//     // Event listeners
//     viewOriginal.addEventListener('click', function() {
//         openFullFrameModal(renderPatientQuestionnaireContent());
//     });

//     downloadBtn.addEventListener('click', function() {
//         downloadQuestionnaire('clinical-questionnaire-christine-mychart.pdf');
//     });

//     return wrap;
// };


function renderClinicalSummary() {
    const wrap = elementCreator('div', { class: 'clinical-summary' });

    // Header with actions
    const header = elementCreator('div', { class: 'q-header' });
    const title = elementCreator('h3', { class: 'summary-title' }, clinicalSummaryData.title);
    const actions = elementCreator('div', { class: 'q-actions' });

    const viewOriginal = elementCreator('button', { class: 'q-link q-view-original', type: 'button' }, [
        elementCreator('img', { class: 'icon-16', src: ICONS.view, alt: '' }),
        elementCreator('span', {}, 'View Original')
    ]);
    // const downloadBtn = elementCreator('button', { class: 'q-link q-download', type: 'button' }, [
    //     elementCreator('img', { class: 'icon-16', src: ICONS.download, alt: '' }),
    //     elementCreator('span', {}, 'Download PDF')
    // ]);

    // actions.append(viewOriginal, downloadBtn);
    actions.append(viewOriginal);
    header.append(title, actions);
    wrap.append(header);

    // Patient Overview & Goals with expandable details
    const overviewWrapper = elementCreator('div', { class: 'overview-wrapper' });

    const overviewText = elementCreator(
        'p', { class: 'section-text' },
        clinicalSummaryData.patientOverview + ' ' + clinicalSummaryData.patientGoals
    );

    const toggleLink = elementCreator(
        'a', { href: '#', class: 'toggle-link' },
        'View more'
    );

    const toggleIcon = elementCreator('img', {
        src: 'https://s3.us-west-1.amazonaws.com/static.aiavaamo.com/icons/fi_chevron-down.svg',
        class: 'toggle-icon'
    });

    toggleLink.appendChild(toggleIcon);

    let extraSections; // placeholder for appended sections

    toggleLink.addEventListener('click', (e) => {
        e.preventDefault();

        if (!extraSections) {
            // Create extra sections container
            extraSections = elementCreator('div', { class: 'extra-sections' });

            extraSections.append(elementCreator('h4', { class: 'section-title' }, 'Patient Medical Overview'));

            // Others Table
            extraSections.append(
                elementCreator('table', { class: 'symptoms-table' }, [
                    elementCreator('thead', {}, elementCreator('tr', {}, [
                        elementCreator('th', { class: 'col-symptom' }, 'CATEGORY'),
                        elementCreator('th', { class: 'col-status' }, 'DETAILS'),
                    ])),
                    elementCreator('tbody', {}, [
                        elementCreator('tr', {}, [
                            elementCreator('td', { class: 'cell-symptom' }, 'Current Medications'),
                            elementCreator('td', { class: 'cell-status' },
                                elementCreator('ul', {},
                                    clinicalSummaryData.relevantMedicalHistory.currentMedications.map(medication =>
                                        elementCreator('li', {}, medication)
                                    )
                                )
                            )
                        ]),
                        elementCreator('tr', {}, [
                            elementCreator('td', { class: 'cell-symptom' }, 'Medication Allergies'),
                            elementCreator('td', { class: 'cell-status' },
                                elementCreator('ul', {},
                                    clinicalSummaryData.relevantMedicalHistory.allergies.map(allergy =>
                                        elementCreator('li', {}, allergy)
                                    )
                                )
                            )
                        ]),
                        elementCreator('tr', {}, [
                            elementCreator('td', { class: 'cell-symptom' }, 'Medical History'),
                            elementCreator('td', { class: 'cell-status', colspan: 2 }, // span both columns
                                elementCreator('div', { class: 'two-col' }, [
                                    elementCreator('div', { class: 'col' }, [
                                        elementCreator('strong', {}, 'Comorbidities:'),
                                        elementCreator('ul', {}, clinicalSummaryData.relevantMedicalHistory.comorbidities.map(comorbidity =>
                                            elementCreator('li', {}, comorbidity)
                                        ))
                                    ]),
                                    elementCreator('div', { class: 'col' }, [
                                        elementCreator('strong', {}, 'Prior Surgery:'),
                                        elementCreator('ul', {}, [
                                            elementCreator('li', {}, clinicalSummaryData.relevantMedicalHistory.priorSurgery)
                                        ])
                                    ])
                                ])
                            )
                        ]),
                        elementCreator('tr', {}, [
                            elementCreator('td', { class: 'cell-symptom' }, 'Family History'),
                            elementCreator('td', { class: 'cell-status', colspan: 2 }, // span both columns
                                elementCreator('div', { class: 'two-col' }, [
                                    elementCreator('div', { class: 'col' }, [
                                        elementCreator('strong', {}, 'Neurological:'),
                                        elementCreator('ul', {}, clinicalSummaryData.significantFamilyHistory.neurological.map(item =>
                                            elementCreator('li', {}, item)
                                        ))
                                    ]),
                                    elementCreator('div', { class: 'col' }, [
                                        elementCreator('strong', {}, 'Cardiovascular/Metabolic:'),
                                        elementCreator('ul', {}, [
                                            elementCreator('li', {}, clinicalSummaryData.significantFamilyHistory.cardiovascularMetabolic.map(item =>
                                                elementCreator('li', {}, item)))
                                        ])
                                    ])
                                ])
                            )
                        ]),
                    ])
                ])
            );
        }

        if (toggleLink.classList.contains('expanded')) {
            // Collapse → remove extra sections
            extraSections.remove();
            toggleLink.classList.remove('expanded');
            toggleLink.firstChild.textContent = 'View more';
            toggleIcon.src = 'https://s3.us-west-1.amazonaws.com/static.aiavaamo.com/icons/fi_chevron-down.svg';
        } else {
            // Expand → append extra sections
            // overviewWrapper.append(extraSections);
            overviewWrapper.after(extraSections);
            toggleLink.classList.add('expanded');
            toggleLink.firstChild.textContent = 'View less';
            toggleIcon.src = 'https://s3.us-west-1.amazonaws.com/static.aiavaamo.com/icons/fi_chevron-down.svg';
        }
    });

    overviewWrapper.append(
        elementCreator('h4', { class: 'section-title' }, 'Patient Overview & Goals'),
        overviewText,
        toggleLink
    );

    wrap.append(overviewWrapper);

    // Current Neurological Symptoms Table
    wrap.append(
        elementCreator('h4', { class: 'section-title' }, 'Current Symptoms'),
        elementCreator('table', { class: 'symptoms-table' }, [
            elementCreator('thead', {}, elementCreator('tr', {}, [
                elementCreator('th', { class: 'col-symptom' }, 'SYMPTOM'),
                elementCreator('th', { class: 'col-status' }, 'PRESENT'),
                // elementCreator('th', { class: 'col-status' }, 'STATUS'),
                // elementCreator('th', { class: 'col-significance' }, 'CLINICAL SIGNIFICANCE')
            ])),
            elementCreator('tbody', {}, clinicalSummaryData.currentNeurologicalSymptoms.map(symptom =>
                elementCreator('tr', {}, [
                    elementCreator('td', { class: 'cell-symptom' }, symptom.symptom),
                    elementCreator('td', { class: 'cell-status' }, symptom.present),
                    // elementCreator('td', { class: 'cell-status' }, symptom.status),
                    // elementCreator('td', { class: 'cell-significance' }, symptom.clinicalSignificance)
                ])
            ))
        ])
    );


    // // Patient Overview
    // wrap.append(
    //     elementCreator('h4', { class: 'section-title' }, 'Patient Overview'),
    //     elementCreator('p', { class: 'section-text' }, clinicalSummaryData.patientOverview)
    // );

    // // Patient Goals
    // wrap.append(
    //     elementCreator('h4', { class: 'section-title' }, 'Patient Goals'),
    //     elementCreator('p', { class: 'section-text' }, clinicalSummaryData.patientGoals)
    // );

    // // Patient Overview & Goals
    // wrap.append(
    //     elementCreator('h4', { class: 'section-title' }, 'Patient Overview & Goals'),
    //     elementCreator('p', { class: 'section-text' }, clinicalSummaryData.patientOverview + ' ' + clinicalSummaryData.patientGoals)
    // );

    // // // Chief Complaint
    // // wrap.append(
    // //     elementCreator('h4', { class: 'section-title' }, 'Chief Complaint'),
    // //     elementCreator('p', { class: 'section-text' }, clinicalSummaryData.chiefComplaint)
    // // );

    // // Current Medications
    // wrap.append(
    //     elementCreator('h4', { class: 'section-title' }, 'Current Medications'),
    //     elementCreator('ul', { class: 'section-list current-medications' }, [
    //         elementCreator('li', {}, 'Current Medications: ' + clinicalSummaryData.relevantMedicalHistory.currentMedications.join(', ')),
    //     ])
    // );

    // // Medication Allergies
    // wrap.append(
    //     elementCreator('h4', { class: 'section-title' }, 'Medication Allergies'),
    //     elementCreator('ul', { class: 'section-list medication-allergies' }, [
    //         elementCreator('li', {}, 'Allergies: ' + clinicalSummaryData.relevantMedicalHistory.allergies.join(', '))
    //     ])
    // );

    // // Relevant Medical History
    // wrap.append(
    //     elementCreator('h4', { class: 'section-title' }, 'Medical History'),
    //     elementCreator('ul', { class: 'section-list medical-history' }, [
    //         elementCreator('li', {}, 'Comorbidities: ' + clinicalSummaryData.relevantMedicalHistory.comorbidities.join(', ')),
    //         elementCreator('li', {}, 'Prior Surgery: ' + clinicalSummaryData.relevantMedicalHistory.priorSurgery),
    //         // elementCreator('li', {}, 'Current Medications: ' + clinicalSummaryData.relevantMedicalHistory.currentMedications.join(', ')),
    //         // elementCreator('li', {}, 'Allergies: ' + clinicalSummaryData.relevantMedicalHistory.allergies.join(', '))
    //     ])
    // );

    // // Significant Family History
    // wrap.append(
    //     elementCreator('h4', { class: 'section-title' }, 'Family History'),
    //     elementCreator('ul', { class: 'section-list family-history' }, [
    //         elementCreator('li', {}, 'Neurological: ' + clinicalSummaryData.significantFamilyHistory.neurological.join(', ')),
    //         elementCreator('li', {}, 'Cardiovascular/Metabolic: ' + clinicalSummaryData.significantFamilyHistory.cardiovascularMetabolic.join(', '))
    //     ])
    // );

    // // Current Neurological Symptoms Table
    // wrap.append(
    //     elementCreator('h4', { class: 'section-title' }, 'Current Symptoms'),
    //     elementCreator('table', { class: 'symptoms-table' }, [
    //         elementCreator('thead', {}, elementCreator('tr', {}, [
    //             elementCreator('th', { class: 'col-symptom' }, 'SYMPTOM'),
    //             elementCreator('th', { class: 'col-status' }, 'PRESENT'),
    //             // elementCreator('th', { class: 'col-status' }, 'STATUS'),
    //             // elementCreator('th', { class: 'col-significance' }, 'CLINICAL SIGNIFICANCE')
    //         ])),
    //         elementCreator('tbody', {}, clinicalSummaryData.currentNeurologicalSymptoms.map(symptom =>
    //             elementCreator('tr', {}, [
    //                 elementCreator('td', { class: 'cell-symptom' }, symptom.symptom),
    //                 elementCreator('td', { class: 'cell-status' }, symptom.present),
    //                 // elementCreator('td', { class: 'cell-status' }, symptom.status),
    //                 // elementCreator('td', { class: 'cell-significance' }, symptom.clinicalSignificance)
    //             ])
    //         ))
    //     ])
    // );

    // // Clinical Considerations
    // wrap.append(
    //     elementCreator('h4', { class: 'section-title' }, 'Clinical Considerations'),
    //     elementCreator('ul', { class: 'section-list clinical-considerations' }, [
    //         elementCreator('li', {}, 'Differential Diagnosis: ' + clinicalSummaryData.clinicalConsiderations.differentialDiagnosis.join(', ')),
    //         elementCreator('li', {}, 'Risk Factors: ' + clinicalSummaryData.clinicalConsiderations.riskFactors.join(', ')),
    //         elementCreator('li', {}, 'Red Flags: ' + clinicalSummaryData.clinicalConsiderations.redFlags.join(', '))
    //     ])
    // );

    // // Recommended Assessment Focus
    // wrap.append(
    //     elementCreator('h4', { class: 'section-title' }, 'Recommended Assessment Focus'),
    //     elementCreator('ul', { class: 'section-list assessment-focus' },
    //         clinicalSummaryData.recommendedAssessmentFocus.map(item => elementCreator('li', {}, item))
    //     )
    // );

    // // --- Relevant Medical History ---
    // wrap.append(
    //     elementCreator('details', { class: 'details-block', open: true }, [
    //         elementCreator('summary', { class: 'details-title' }, 'Relevant Medical History'),
    //         elementCreator('ul', { class: 'section-list medical-history' }, [
    //             elementCreator('li', {}, 'Comorbidities: ' + clinicalSummaryData.relevantMedicalHistory.comorbidities.join(', ')),
    //             elementCreator('li', {}, 'Prior Surgery: ' + clinicalSummaryData.relevantMedicalHistory.priorSurgery),
    //             elementCreator('li', {}, 'Current Medications: ' + clinicalSummaryData.relevantMedicalHistory.currentMedications.join(', ')),
    //             elementCreator('li', {}, 'Allergies: ' + clinicalSummaryData.relevantMedicalHistory.allergies.join(', '))
    //         ])
    //     ])
    // );

    // // --- Significant Family History ---
    // wrap.append(
    //     elementCreator('details', { class: 'details-block', }, [
    //         elementCreator('summary', { class: 'details-title' }, 'Significant Family History'),
    //         elementCreator('ul', { class: 'section-list family-history' }, [
    //             elementCreator('li', {}, 'Neurological: ' + clinicalSummaryData.significantFamilyHistory.neurological.join(', ')),
    //             elementCreator('li', {}, 'Cardiovascular/Metabolic: ' + clinicalSummaryData.significantFamilyHistory.cardiovascularMetabolic.join(', '))
    //         ])
    //     ])
    // );

    // // --- Current Neurological Symptoms ---
    // wrap.append(
    //     elementCreator('details', { class: 'details-block', }, [
    //         elementCreator('summary', { class: 'details-title' }, 'Current Neurological Symptoms'),
    //         elementCreator('table', { class: 'symptoms-table' }, [
    //             elementCreator('thead', {}, elementCreator('tr', {}, [
    //                 elementCreator('th', { class: 'col-symptom' }, 'SYMPTOM'),
    //                 elementCreator('th', { class: 'col-status' }, 'STATUS'),
    //                 elementCreator('th', { class: 'col-significance' }, 'CLINICAL SIGNIFICANCE')
    //             ])),
    //             elementCreator('tbody', {}, clinicalSummaryData.currentNeurologicalSymptoms.map(symptom =>
    //                 elementCreator('tr', {}, [
    //                     elementCreator('td', { class: 'cell-symptom' }, symptom.symptom),
    //                     elementCreator('td', { class: 'cell-status' }, symptom.status),
    //                     elementCreator('td', { class: 'cell-significance' }, symptom.clinicalSignificance)
    //                 ])
    //             ))
    //         ])
    //     ])
    // );

    // // --- Clinical Considerations ---
    // wrap.append(
    //     elementCreator('details', { class: 'details-block', }, [
    //         elementCreator('summary', { class: 'details-title' }, 'Clinical Considerations'),
    //         elementCreator('ul', { class: 'section-list clinical-considerations' }, [
    //             elementCreator('li', {}, 'Differential Diagnosis: ' + clinicalSummaryData.clinicalConsiderations.differentialDiagnosis.join(', ')),
    //             elementCreator('li', {}, 'Risk Factors: ' + clinicalSummaryData.clinicalConsiderations.riskFactors.join(', ')),
    //             elementCreator('li', {}, 'Red Flags: ' + clinicalSummaryData.clinicalConsiderations.redFlags.join(', '))
    //         ])
    //     ])
    // );

    // // --- Recommended Assessment Focus ---
    // wrap.append(
    //     elementCreator('details', { class: 'details-block', }, [
    //         elementCreator('summary', { class: 'details-title' }, 'Recommended Assessment Focus'),
    //         elementCreator('ul', { class: 'section-list assessment-focus' },
    //             clinicalSummaryData.recommendedAssessmentFocus.map(item => elementCreator('li', {}, item))
    //         )
    //     ])
    // );


    // Event listeners
    viewOriginal.addEventListener('click', function() {
        openFullFrameModal(renderPatientQuestionnaireContent());
    });
    // downloadBtn.addEventListener('click', function() {
    //     downloadQuestionnaire('clinical-questionnaire-christine-mychart.pdf');
    // });

    return wrap;
};


// Modal to show original questionnaire over the entire main pane frame
function openFullFrameModal(contentNode) {
    const mainPane = document.querySelector('.main-pane');
    if (!mainPane) return;
    // Ensure main pane can host absolutely positioned overlay
    if (!mainPane.style.position) mainPane.style.position = 'relative';

    const overlay = elementCreator('div', { class: 'modal-overlay', role: 'dialog', 'aria-modal': 'true' });
    const sheet = elementCreator('div', { class: 'modal-sheet' });
    const closeBtn = elementCreator('button', { class: 'modal-close', 'aria-label': 'Close' }, '×');
    closeBtn.addEventListener('click', function() { mainPane.removeChild(overlay); });
    overlay.addEventListener('click', function(e) { if (e.target === overlay) mainPane.removeChild(overlay); });
    document.addEventListener('keydown', function esc(ev) {
        if (ev.key === 'Escape') {
            try { mainPane.removeChild(overlay); } catch (e) {}
            document.removeEventListener('keydown', esc);
        }
    });
    sheet.append(closeBtn, contentNode);
    overlay.append(sheet);
    mainPane.append(overlay);
}

// Modal for medications grid
function openMedicationModal(med) {
    const mainPane = document.querySelector('.main-pane');
    if (!mainPane) return;
    if (!mainPane.style.position) mainPane.style.position = 'relative';

    const overlay = elementCreator('div', { class: 'modal-overlay med-modal-overlay', role: 'dialog', 'aria-modal': 'true' });
    const sheet = elementCreator('div', { class: 'modal-sheet med-modal-sheet' });
    const closeBtn = elementCreator('button', { class: 'modal-close', 'aria-label': 'Close' }, '×');
    closeBtn.addEventListener('click', function() { mainPane.removeChild(overlay); });
    overlay.addEventListener('click', function(e) { if (e.target === overlay) mainPane.removeChild(overlay); });

    // Medication card wrapper (replicates tile style)
    const medCard = elementCreator('div', { class: 'med-card' });

    // Title
    const title = elementCreator('h3', { class: 'med-title' }, med.name);

    // Common name
    const commonName = med.common_name ?
        elementCreator('p', { class: 'med-common-name' }, `Commonly known as: ${med.common_name}`) :
        null;

    // Instructions + status
    const instructions = elementCreator('p', { class: 'med-instructions' }, med.instructions || '');
    const status = med.expiration_date ? elementCreator('p', { class: 'med-status' }, `Prescription ${med.prescription_status.toLowerCase()} on ${med.expiration_date}`) : '';

    // Details grid
    const grid = elementCreator('div', { class: 'med-details-grid' }, [
        elementCreator('div', { class: 'kv-block' }, [
            elementCreator('h5', {}, 'Prescription Details'),
            elementCreator('div', { class: 'kv-row' }, [
                elementCreator('div', { class: 'k' }, 'Prescribed'),
                elementCreator('div', { class: 'v' }, med.prescription_details.prescribed_date)
            ]),
            elementCreator('div', { class: 'kv-row' }, [
                elementCreator('div', { class: 'k' }, 'Approved by'),
                elementCreator('div', { class: 'v' }, med.prescription_details.approved_by)
            ])
        ]),
        elementCreator('div', { class: 'kv-block' }, [
            elementCreator('h5', {}, 'Refill Details'),
            elementCreator('div', { class: 'kv-row' }, [
                elementCreator('div', { class: 'k' }, 'Quantity'),
                elementCreator('div', { class: 'v' }, med.refill_details.quantity)
            ]),
            elementCreator('div', { class: 'kv-row' }, [
                elementCreator('div', { class: 'k' }, 'Day supply'),
                elementCreator('div', { class: 'v' }, med.refill_details.day_supply)
            ])
        ]),
        elementCreator('div', { class: 'kv-block pharmacy' }, [
            elementCreator('h5', {}, 'Pharmacy Details'),
            elementCreator('div', { class: 'kv-row' }, [
                elementCreator('div', { class: 'k' }, ''),
                elementCreator('div', { class: 'v' }, med.pharmacy_details.name)
            ]),
            elementCreator('div', { class: 'kv-row' }, [
                elementCreator('div', { class: 'k' }, ''),
                elementCreator('div', { class: 'v' }, med.pharmacy_details.address)
            ]),
            elementCreator('div', { class: 'kv-row' }, [
                elementCreator('div', { class: 'k' }, ''),
                elementCreator('div', { class: 'v' }, med.pharmacy_details.phone)
            ])
        ])
    ]);

    medCard.append(title, commonName, instructions, status, grid);
    sheet.append(closeBtn, medCard);
    overlay.append(sheet);
    mainPane.append(overlay);


    // const overlay = elementCreator('div', { class: 'modal-overlay med-modal-overlay', role: 'dialog', 'aria-modal': 'true' });
    // const sheet = elementCreator('div', { class: 'modal-sheet med-modal-sheet' });
    // const closeBtn = elementCreator('button', { class: 'modal-close', 'aria-label': 'Close' }, '×');
    // closeBtn.addEventListener('click', function() { mainPane.removeChild(overlay); });
    // overlay.addEventListener('click', function(e) { if (e.target === overlay) mainPane.removeChild(overlay); });

    // // Title
    // const title = elementCreator('h3', { class: 'med-modal-title' }, med.name);

    // // Common name
    // const commonName = med.common_name ?
    //     elementCreator('p', { class: 'med-common-name' }, `Commonly known as: ${med.common_name}`) :
    //     null;

    // // Instructions + status
    // const instructions = elementCreator('p', { class: 'med-instructions' }, med.instructions || '');
    // const status = elementCreator('p', { class: 'med-status' }, med.expiration_date ? `Prescription ${med.prescription_status.toLowerCase()} on ${med.expiration_date}` : '');

    // // Details grid
    // const grid = elementCreator('div', { class: 'med-details-grid' }, [
    //     // Prescription details
    //     elementCreator('div', { class: 'kv-row' }, [
    //         elementCreator('div', { class: 'k' }, 'Prescribed'),
    //         elementCreator('div', { class: 'v' }, med.prescription_details.prescribed_date)
    //     ]),
    //     elementCreator('div', { class: 'kv-row' }, [
    //         elementCreator('div', { class: 'k' }, 'Approved by'),
    //         elementCreator('div', { class: 'v' }, med.prescription_details.approved_by)
    //     ]),

    //     // Refill details
    //     elementCreator('div', { class: 'kv-row' }, [
    //         elementCreator('div', { class: 'k' }, 'Quantity'),
    //         elementCreator('div', { class: 'v' }, med.refill_details.quantity)
    //     ]),
    //     elementCreator('div', { class: 'kv-row' }, [
    //         elementCreator('div', { class: 'k' }, 'Day supply'),
    //         elementCreator('div', { class: 'v' }, med.refill_details.day_supply)
    //     ]),

    //     // Pharmacy details
    //     elementCreator('div', { class: 'kv-row' }, [
    //         elementCreator('div', { class: 'k' }, 'Pharmacy'),
    //         elementCreator('div', { class: 'v' }, med.pharmacy_details.name)
    //     ]),
    //     elementCreator('div', { class: 'kv-row' }, [
    //         elementCreator('div', { class: 'k' }, 'Address'),
    //         elementCreator('div', { class: 'v' }, med.pharmacy_details.address)
    //     ]),
    //     elementCreator('div', { class: 'kv-row' }, [
    //         elementCreator('div', { class: 'k' }, 'Phone'),
    //         elementCreator('div', { class: 'v' }, med.pharmacy_details.phone)
    //     ]),
    // ]);

    // sheet.append(closeBtn, title, commonName, instructions, status, grid);
    // overlay.append(sheet);
    // mainPane.append(overlay);
}

// Modal for lab results grid (with number line if applicable)
function openLabResultsModal(test) {
    const mainPane = document.querySelector('.main-pane');
    if (!mainPane) return;
    if (!mainPane.style.position) mainPane.style.position = 'relative';

    const overlay = elementCreator('div', { class: 'modal-overlay lab-modal-overlay', role: 'dialog', 'aria-modal': 'true' });
    const sheet = elementCreator('div', { class: 'modal-sheet lab-modal-sheet' });
    const closeBtn = elementCreator('button', { class: 'modal-close', 'aria-label': 'Close' }, '×');
    closeBtn.addEventListener('click', function() { mainPane.removeChild(overlay); });
    overlay.addEventListener('click', function(e) { if (e.target === overlay) mainPane.removeChild(overlay); });

    const title = elementCreator('h3', { class: 'lab-modal-title' }, test.label + ' — Results');
    const date = elementCreator('h4', { class: 'lab-modal-title' }, test.date);
    const grid = elementCreator('div', { class: 'lab-results-grid' });

    (test.results || []).forEach(function(r) {
        const tile = elementCreator('div', { class: 'lab-tile' });
        tile.append(elementCreator('div', { class: 'lab-name' }, r.name));

        if (typeof r.min === 'number' && typeof r.max === 'number') {
            const numberLine = elementCreator('div', { class: 'lab-number-line' });

            // --- Full baseline with 3 segments ---
            const baseline = elementCreator('div', { class: 'baseline' });

            // Scale = min at 0% → max at 100%
            const globalMin = r.min - (r.max - r.min) * 0.5; // extra padding before min
            const globalMax = r.max + (r.max - r.min) * 0.5; // extra padding after max
            const totalRange = globalMax - globalMin;

            const leftWidth = ((r.min - globalMin) / totalRange) * 100;
            const midWidth = ((r.max - r.min) / totalRange) * 100;
            const rightWidth = ((globalMax - r.max) / totalRange) * 100;

            const leftSection = elementCreator('div', {
                class: 'range-section yellow',
                style: `width: ${leftWidth}%; `
            });
            const greenSection = elementCreator('div', {
                class: 'range-section green',
                style: `width:${midWidth}%; `
            });
            const rightSection = elementCreator('div', {
                class: 'range-section yellow',
                style: `width:${rightWidth}%; `
            });

            baseline.append(leftSection, greenSection, rightSection);
            numberLine.append(baseline);

            // --- Marker for current value ---
            const val = parseFloat(r.value);
            if (!isNaN(val)) {
                const percent = ((val - globalMin) / totalRange) * 100;
                const clamped = Math.min(Math.max(percent, 0), 100);

                const markerWrapper = elementCreator('div', {
                    class: 'marker-wrapper',
                    style: `left:${clamped}% `
                });

                const bubble = elementCreator('div', { class: 'value-bubble' }, val);
                const pointer = elementCreator('div', { class: 'bubble-pointer' });

                markerWrapper.append(bubble, pointer);
                numberLine.append(markerWrapper);
            }

            // --- Min/Max labels positioned under the green segment ---
            const labels = elementCreator('div', { class: 'range-labels' });

            const minLabel = elementCreator('span', {
                class: 'range-label',
                style: `left:${leftWidth}%; transform: translateX(-50 %); `
            }, `${r.min}${r.unit || ''} `);

            const maxLabel = elementCreator('span', {
                class: 'range-label',
                style: `left:${leftWidth + midWidth}%; transform: translateX(-50 %); `
            }, `${r.max}${r.unit || ''} `);

            labels.append(minLabel, maxLabel);
            numberLine.append(labels);

            // // --- Min/Max labels ---
            // const labels = elementCreator('div', { class: 'line-labels' }, [
            //     elementCreator('span', {}, `${ r.min }${ r.unit || '' } `),
            //     elementCreator('span', {}, `${ r.max }${ r.unit || '' } `)
            // ]);

            // tile.append(numberLine, labels);

            tile.append(numberLine);
        } else {
            function formatUnit(value, unit, abnormal) {
                if (!unit) {
                    if (abnormal) {
                        const span = document.createElement('span');
                        span.textContent = value + ' - ';
                        const b = document.createElement('b');
                        b.textContent = 'Abnormal';
                        span.appendChild(b);
                        return span;
                    }
                    return value;
                }

                // Replace things like "10^3" with "10³"
                const formattedUnit = unit.replace(/\^(\d+)/g, (_, exp) =>
                    exp.split('').map(d => '⁰¹²³⁴⁵⁶⁷⁸⁹' [d]).join('')
                );

                return `Value: ${value} ${formattedUnit} `;
            }

            tile.append(
                elementCreator('div', { class: 'lab-value' }, formatUnit(r.value, r.unit, r.abnormal))
            );
        }

        grid.append(tile);
    });

    sheet.append(closeBtn, title, date, grid);
    overlay.append(sheet);
    mainPane.append(overlay);
}



// // Modal for lab results grid (with number line if applicable)
// function openLabResultsModal(test) {
//     const mainPane = document.querySelector('.main-pane');
//     if (!mainPane) return;
//     if (!mainPane.style.position) mainPane.style.position = 'relative';

//     const overlay = elementCreator('div', { class: 'modal-overlay lab-modal-overlay', role: 'dialog', 'aria-modal': 'true' });
//     const sheet = elementCreator('div', { class: 'modal-sheet lab-modal-sheet' });
//     const closeBtn = elementCreator('button', { class: 'modal-close', 'aria-label': 'Close' }, '×');
//     closeBtn.addEventListener('click', function() { mainPane.removeChild(overlay); });
//     overlay.addEventListener('click', function(e) { if (e.target === overlay) mainPane.removeChild(overlay); });

//     const title = elementCreator('h3', { class: 'lab-modal-title' }, test.label + ' — Results');
//     const date = elementCreator('h4', { class: 'lab-modal-title' }, test.date);
//     const grid = elementCreator('div', { class: 'lab-results-grid' });

//     (test.results || []).forEach(function(r) {
//         const tile = elementCreator('div', { class: 'lab-tile' });

//         // Name + value
//         tile.append(
//             elementCreator('div', { class: 'lab-name' }, r.name),
//             elementCreator('div', { class: 'lab-value' }, `${ r.value } ${ r.unit || '' } `)
//         );

//         // Number line only if min/max available
//         if (typeof r.min === 'number' && typeof r.max === 'number') {
//             const numberLine = elementCreator('div', { class: 'lab-number-line' });

//             // Grey baseline
//             const baseline = elementCreator('div', { class: 'baseline' });
//             numberLine.append(baseline);

//             // Normal range (blue bar)
//             const normalRange = elementCreator('div', {
//                 class: 'normal-range',
//                 style: `left: 0 %; width: 100 %; `
//             });
//             baseline.append(normalRange);

//             // Marker
//             const val = parseFloat(r.value);
//             if (!isNaN(val)) {
//                 const percent = ((val - r.min) / (r.max - r.min)) * 100;
//                 const marker = elementCreator('div', {
//                     class: `marker ${ val < r.min || val > r.max ? 'out-of-range' : 'in-range' } `,
//                     style: `left:${ Math.min(Math.max(percent, 0), 100) }% `
//                 });
//                 numberLine.append(marker);
//             }

//             // Labels
//             const labels = elementCreator('div', { class: 'line-labels' }, [
//                 elementCreator('span', {}, `${ r.min }${ r.unit || '' } `),
//                 elementCreator('span', {}, `${ r.max }${ r.unit || '' } `)
//             ]);

//             tile.append(numberLine, labels);
//         }

//         grid.append(tile);
//     });

//     sheet.append(closeBtn, title, date, grid);
//     overlay.append(sheet);
//     mainPane.append(overlay);
// }

// Modal for lab results grid (name/value tiles)

// function openLabResultsModal(test) {
//     const mainPane = document.querySelector('.main-pane');
//     if (!mainPane) return;
//     if (!mainPane.style.position) mainPane.style.position = 'relative';

//     const overlay = elementCreator('div', { class: 'modal-overlay lab-modal-overlay', role: 'dialog', 'aria-modal': 'true' });
//     const sheet = elementCreator('div', { class: 'modal-sheet lab-modal-sheet' });
//     const closeBtn = elementCreator('button', { class: 'modal-close', 'aria-label': 'Close' }, '×');
//     closeBtn.addEventListener('click', function() { mainPane.removeChild(overlay); });
//     overlay.addEventListener('click', function(e) { if (e.target === overlay) mainPane.removeChild(overlay); });

//     const title = elementCreator('h3', { class: 'lab-modal-title' }, test.label + ' — Results');
//     const date = elementCreator('h4', { class: 'lab-modal-title' }, test.date);
//     const grid = elementCreator('div', { class: 'lab-results-grid' });
//     (test.results || []).forEach(function(r) {
//         const tile = elementCreator('div', { class: 'lab-tile' }, [
//             elementCreator('div', { class: 'lab-name' }, r.name),
//             elementCreator('div', { class: 'lab-value' }, r.value)
//         ]);
//         grid.append(tile);
//     });

//     sheet.append(closeBtn, title, date, grid);
//     overlay.append(sheet);
//     mainPane.append(overlay);
// }

function renderPatientQuestionnaire() {
    const wrap = elementCreator('div', { class: 'patient-questionnaire' });

    // Title
    const title = elementCreator('h3', {}, 'Completed Neurology Patient Questionnaire');
    wrap.append(title);

    // Patient Information
    const patientInfo = elementCreator('h4', {}, '1. Patient Information');
    const patientInfoList = elementCreator('ul', {}, [
        elementCreator('li', {}, 'Patient Name: ' + originalQuestionnaireData.patientInformation.patientName),
        elementCreator('li', {}, 'Date of Birth: ' + originalQuestionnaireData.patientInformation.dateOfBirth),
        elementCreator('li', {}, 'Hand You Write With: ' + originalQuestionnaireData.patientInformation.handYouWriteWith)
    ]);
    wrap.append(patientInfo, patientInfoList);

    // Chief Complaint
    // const chiefComplaint = elementCreator('h4', {}, '2. Chief Complaint');
    // const chiefComplaintText = elementCreator('p', {}, originalQuestionnaireData.chiefComplaint);
    // wrap.append(chiefComplaint, chiefComplaintText);

    // Current Medications
    const currentMedications = elementCreator('h4', {}, '2. Current Medications');
    const medicationsTable = elementCreator('table', {}, [
        elementCreator('thead', {}, elementCreator('tr', {}, [
            elementCreator('th', {}, 'MEDICATION'),
            elementCreator('th', {}, 'DOSAGE'),
            elementCreator('th', {}, 'FREQUENCY')
        ])),
        elementCreator('tbody', {}, originalQuestionnaireData.currentMedications.map(med =>
            elementCreator('tr', {}, [
                elementCreator('td', {}, med.medication),
                elementCreator('td', {}, med.dosage),
                elementCreator('td', {}, med.frequency)
            ])
        ))
    ]);
    wrap.append(currentMedications, medicationsTable);

    // Medication Allergies
    const medicationAllergies = elementCreator('h4', {}, '3. Medication Allergies');
    const medicationAllergiesList = elementCreator('ul', {},
        originalQuestionnaireData.medicationAllergies.map(allergy => elementCreator('li', {}, allergy))
    );
    wrap.append(medicationAllergies, medicationAllergiesList);

    // Medical History
    const medicalHistory = elementCreator('h4', {}, '4. Medical History');
    const currentAndPastProblems = elementCreator('p', {}, 'Current and Past Medical Problems:');
    const currentAndPastProblemsList = elementCreator('ul', {},
        originalQuestionnaireData.medicalHistory.currentAndPastMedicalProblems.map(problem => elementCreator('li', {}, problem))
    );
    const familyHistory = elementCreator('p', {}, 'Family History:');
    const familyHistoryList = elementCreator('ul', {},
        originalQuestionnaireData.medicalHistory.familyHistory.map(history => elementCreator('li', {}, history))
    );
    wrap.append(medicalHistory, currentAndPastProblems, currentAndPastProblemsList, familyHistory, familyHistoryList);

    // Social History
    const socialHistory = elementCreator('h4', {}, '5. Social History');
    const socialHistoryList = elementCreator('ul', {}, [
        elementCreator('li', {}, 'Smoking: ' + originalQuestionnaireData.socialHistory.smoking),
        elementCreator('li', {}, 'Alcohol: ' + originalQuestionnaireData.socialHistory.alcohol),
        elementCreator('li', {}, 'Heavy Drinker: ' + originalQuestionnaireData.socialHistory.heavyDrinker),
        elementCreator('li', {}, 'Marital Status: ' + originalQuestionnaireData.socialHistory.maritalStatus),
        elementCreator('li', {}, 'Education: ' + originalQuestionnaireData.socialHistory.education),
        elementCreator('li', {}, 'Occupation: ' + originalQuestionnaireData.socialHistory.occupation)
    ]);
    wrap.append(socialHistory, socialHistoryList);

    // Current Symptoms
    const currentSymptoms = elementCreator('h4', {}, '6. Current Symptoms');
    const symptomsTable = elementCreator('table', {}, [
        elementCreator('thead', {}, elementCreator('tr', {}, [
            elementCreator('th', {}, 'SYMPTOM'),
            elementCreator('th', {}, 'PRESENT')
        ])),
        elementCreator('tbody', {}, originalQuestionnaireData.currentSymptoms.map(symptom =>
            elementCreator('tr', {}, [
                elementCreator('td', {}, symptom.symptom),
                elementCreator('td', {}, symptom.present)
            ])
        ))
    ]);
    wrap.append(currentSymptoms, symptomsTable);

    // Top 3 Questions for Doctor
    const top3Questions = elementCreator('h4', {}, '7. Top 3 Questions for Doctor');
    const top3QuestionsList = elementCreator('ol', {},
        originalQuestionnaireData.top3QuestionsForDoctor.map((question, index) =>
            elementCreator('li', {}, question)
        )
    );
    wrap.append(top3Questions, top3QuestionsList);

    // Visit Goals and Concerns
    const visitGoals = elementCreator('h4', {}, '8. Visit Goals and Concerns');
    const primaryGoal = elementCreator('p', {}, 'Primary Goal: ' + originalQuestionnaireData.visitGoalsAndConcerns.primaryGoal);
    const top3Concerns = elementCreator('p', {}, 'Top 3 Concerns:');
    const top3ConcernsList = elementCreator('ol', {},
        originalQuestionnaireData.visitGoalsAndConcerns.top3Concerns.map((concern, index) =>
            elementCreator('li', {}, concern)
        )
    );
    wrap.append(visitGoals, primaryGoal, top3Concerns, top3ConcernsList);

    // Button group for download
    const buttonGroup = elementCreator('div', { class: 'button-group' });
    const downloadBtn = elementCreator('button', { class: 'btn download-original' }, 'Download Original');
    buttonGroup.append(downloadBtn);
    wrap.append(buttonGroup);

    // Event listener for download
    downloadBtn.addEventListener('click', function() {
        downloadQuestionnaire('patient-questionnaire-christine-mychart.pdf');
    });

    return wrap;
};

function renderPatientQuestionnaireContent() {
    // This function returns the same content as renderPatientQuestionnaire but without the button
    const wrap = elementCreator('div', { class: 'patient-questionnaire' });

    // Title
    const title = elementCreator('h3', {}, 'Completed Neurology Patient Questionnaire');
    wrap.append(title);

    // Patient Information
    const patientInfo = elementCreator('h4', {}, '1. Patient Information');
    const patientInfoList = elementCreator('ul', {}, [
        elementCreator('li', {}, 'Patient Name: ' + originalQuestionnaireData.patientInformation.patientName),
        elementCreator('li', {}, 'Date of Birth: ' + originalQuestionnaireData.patientInformation.dateOfBirth),
        elementCreator('li', {}, 'Hand You Write With: ' + originalQuestionnaireData.patientInformation.handYouWriteWith)
    ]);
    wrap.append(patientInfo, patientInfoList);

    // // Chief Complaint
    // const chiefComplaint = elementCreator('h4', {}, '2. Chief Complaint');
    // const chiefComplaintText = elementCreator('p', {}, originalQuestionnaireData.chiefComplaint);
    // wrap.append(chiefComplaint, chiefComplaintText);

    // Current Medications
    const currentMedications = elementCreator('h4', {}, '2. Current Medications');
    const medicationsTable = elementCreator('table', {}, [
        elementCreator('thead', {}, elementCreator('tr', {}, [
            elementCreator('th', {}, 'MEDICATION'),
            elementCreator('th', {}, 'DOSAGE'),
            elementCreator('th', {}, 'FREQUENCY')
        ])),
        elementCreator('tbody', {}, originalQuestionnaireData.currentMedications.map(med =>
            elementCreator('tr', {}, [
                elementCreator('td', {}, med.medication),
                elementCreator('td', {}, med.dosage),
                elementCreator('td', {}, med.frequency)
            ])
        ))
    ]);
    wrap.append(currentMedications, medicationsTable);

    // Medication Allergies
    const medicationAllergies = elementCreator('h4', {}, '3. Medication Allergies');
    const medicationAllergiesList = elementCreator('ul', {},
        originalQuestionnaireData.medicationAllergies.map(allergy => elementCreator('li', {}, allergy))
    );
    wrap.append(medicationAllergies, medicationAllergiesList);

    // Medical History
    const medicalHistory = elementCreator('h4', {}, '4. Medical History');
    const currentAndPastProblems = elementCreator('p', {}, 'Current and Past Medical Problems:');
    const currentAndPastProblemsList = elementCreator('ul', {},
        originalQuestionnaireData.medicalHistory.currentAndPastMedicalProblems.map(problem => elementCreator('li', {}, problem))
    );
    const familyHistory = elementCreator('p', {}, 'Family History:');
    const familyHistoryList = elementCreator('ul', {},
        originalQuestionnaireData.medicalHistory.familyHistory.map(history => elementCreator('li', {}, history))
    );
    wrap.append(medicalHistory, currentAndPastProblems, currentAndPastProblemsList, familyHistory, familyHistoryList);

    // Social History
    const socialHistory = elementCreator('h4', {}, '5. Social History');
    const socialHistoryList = elementCreator('ul', {}, [
        elementCreator('li', {}, 'Smoking: ' + originalQuestionnaireData.socialHistory.smoking),
        elementCreator('li', {}, 'Alcohol: ' + originalQuestionnaireData.socialHistory.alcohol),
        elementCreator('li', {}, 'Heavy Drinker: ' + originalQuestionnaireData.socialHistory.heavyDrinker),
        elementCreator('li', {}, 'Marital Status: ' + originalQuestionnaireData.socialHistory.maritalStatus),
        elementCreator('li', {}, 'Education: ' + originalQuestionnaireData.socialHistory.education),
        elementCreator('li', {}, 'Occupation: ' + originalQuestionnaireData.socialHistory.occupation)
    ]);
    wrap.append(socialHistory, socialHistoryList);

    // Current Symptoms
    const currentSymptoms = elementCreator('h4', {}, '6. Current Symptoms');
    const symptomsTable = elementCreator('table', {}, [
        elementCreator('thead', {}, elementCreator('tr', {}, [
            elementCreator('th', {}, 'SYMPTOM'),
            elementCreator('th', {}, 'PRESENT')
        ])),
        elementCreator('tbody', {}, originalQuestionnaireData.currentSymptoms.map(symptom =>
            elementCreator('tr', {}, [
                elementCreator('td', {}, symptom.symptom),
                elementCreator('td', {}, symptom.present)
            ])
        ))
    ]);
    wrap.append(currentSymptoms, symptomsTable);

    // Top 3 Questions for Doctor
    const top3Questions = elementCreator('h4', {}, '7. Top 3 Questions for Doctor');
    const top3QuestionsList = elementCreator('ol', {},
        originalQuestionnaireData.top3QuestionsForDoctor.map((question, index) =>
            elementCreator('li', {}, question)
        )
    );
    wrap.append(top3Questions, top3QuestionsList);

    // Visit Goals and Concerns
    const visitGoals = elementCreator('h4', {}, '8. Visit Goals and Concerns');
    const primaryGoal = elementCreator('p', {}, 'Primary Goal: ' + originalQuestionnaireData.visitGoalsAndConcerns.primaryGoal);
    const top3Concerns = elementCreator('p', {}, 'Top 3 Concerns:');
    const top3ConcernsList = elementCreator('ol', {},
        originalQuestionnaireData.visitGoalsAndConcerns.top3Concerns.map((concern, index) =>
            elementCreator('li', {}, concern)
        )
    );
    wrap.append(visitGoals, primaryGoal, top3Concerns, top3ConcernsList);

    return wrap;
};

function downloadQuestionnaire(filename) {
    // Create PDF using jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    let yPosition = 20;
    const lineHeight = 7;
    const margin = 20;
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;

    // Helper function to check if we need a new page
    function checkNewPage(requiredSpace) {
        if (yPosition + requiredSpace > pageHeight - margin) {
            doc.addPage();
            yPosition = 20;
            return true;
        }
        return false;
    }

    // Helper function to add text with word wrapping and page management
    function addWrappedText(text, y, fontSize = 12) {
        doc.setFontSize(fontSize);
        const lines = doc.splitTextToSize(text, pageWidth - 2 * margin);
        const textHeight = lines.length * lineHeight;

        // Check if we need a new page
        if (y + textHeight > pageHeight - margin) {
            doc.addPage();
            y = 20;
        }

        doc.text(lines, margin, y);
        return y + textHeight;
    }

    // Helper function to add section header
    function addSectionHeader(text, y) {
        checkNewPage(lineHeight + 10);
        doc.setFontSize(14);
        doc.setFont(undefined, 'bold');
        doc.text(text, margin, y);
        return y + lineHeight + 5;
    }

    // Helper function to add regular text
    function addRegularText(text, y) {
        doc.setFontSize(11);
        doc.setFont(undefined, 'normal');
        return addWrappedText(text, y, 11);
    }

    if (filename.includes('clinical-summary')) {
        // Clinical Summary PDF
        // yPosition = addSectionHeader('Pre-Consultation Brief', yPosition);
        yPosition = addSectionHeader('Outlined below is a pre-consultation brief summarizing key patient details to help guide the upcoming visit.', yPosition);
        yPosition += 5;

        yPosition = addSectionHeader('Patient Overview', yPosition);
        yPosition = addRegularText(clinicalSummaryData.patientOverview, yPosition);
        yPosition += 5;

        yPosition = addSectionHeader('Patient Goals', yPosition);
        yPosition = addRegularText(clinicalSummaryData.patientGoals, yPosition);
        yPosition += 5;

        // yPosition = addSectionHeader('Chief Complaint', yPosition);
        // yPosition = addRegularText(clinicalSummaryData.chiefComplaint, yPosition);
        // yPosition += 5;

        yPosition = addSectionHeader('Current Medications', yPosition);
        yPosition = addRegularText(`Current Medications: ${clinicalSummaryData.relevantMedicalHistory.currentMedications.join(', ')} `, yPosition);
        yPosition += 5;

        yPosition = addSectionHeader('Medication Allergies', yPosition);
        yPosition = addRegularText(`Allergies: ${clinicalSummaryData.relevantMedicalHistory.allergies.join(', ')} `, yPosition);
        yPosition += 5;

        yPosition = addSectionHeader('Medical History', yPosition);
        yPosition = addRegularText(`Comorbidities: ${clinicalSummaryData.relevantMedicalHistory.comorbidities.join(', ')} `, yPosition);
        yPosition = addRegularText(`Prior Surgery: ${clinicalSummaryData.relevantMedicalHistory.priorSurgery} `, yPosition);
        yPosition += 5;

        yPosition = addSectionHeader('Family History', yPosition);
        yPosition = addRegularText(`Neurological: ${clinicalSummaryData.significantFamilyHistory.neurological.join(', ')} `, yPosition);
        yPosition = addRegularText(`Cardiovascular / Metabolic: ${clinicalSummaryData.significantFamilyHistory.cardiovascularMetabolic.join(', ')} `, yPosition);
        yPosition += 5;

        yPosition = addSectionHeader('Current Symptoms', yPosition);
        clinicalSummaryData.currentNeurologicalSymptoms.forEach(symptom => {
            yPosition = addRegularText(`${symptom.symptom}: ${symptom.present}
} `, yPosition);
            // yPosition = addRegularText(`${ symptom.symptom }: ${ symptom.status } - ${ symptom.clinicalSignificance } `, yPosition);
        });
        // yPosition += 5;

        // yPosition = addSectionHeader('Clinical Considerations', yPosition);
        // yPosition = addRegularText(`Differential Diagnosis: ${ clinicalSummaryData.clinicalConsiderations.differentialDiagnosis.join(', ') } `, yPosition);
        // yPosition = addRegularText(`Risk Factors: ${ clinicalSummaryData.clinicalConsiderations.riskFactors.join(', ') } `, yPosition);
        // yPosition = addRegularText(`Red Flags: ${ clinicalSummaryData.clinicalConsiderations.redFlags.join(', ') } `, yPosition);
        // yPosition += 5;

        // yPosition = addSectionHeader('Recommended Assessment Focus', yPosition);
        // clinicalSummaryData.recommendedAssessmentFocus.forEach(item => {
        //     yPosition = addRegularText(`• ${ item } `, yPosition);
        // });

    } else {
        // Patient Questionnaire PDF
        yPosition = addSectionHeader('Completed Neurology Patient Questionnaire', yPosition);
        yPosition += 5;

        yPosition = addSectionHeader('1. Patient Information', yPosition);
        yPosition = addRegularText(`Patient Name: ${originalQuestionnaireData.patientInformation.patientName} `, yPosition);
        yPosition = addRegularText(`Date of Birth: ${originalQuestionnaireData.patientInformation.dateOfBirth} `, yPosition);
        yPosition = addRegularText(`Hand You Write With: ${originalQuestionnaireData.patientInformation.handYouWriteWith} `, yPosition);
        yPosition += 5;

        yPosition = addSectionHeader('2. Chief Complaint', yPosition);
        yPosition = addRegularText(originalQuestionnaireData.chiefComplaint, yPosition);
        yPosition += 5;

        yPosition = addSectionHeader('3. Current Medications', yPosition);
        originalQuestionnaireData.currentMedications.forEach(med => {
            yPosition = addRegularText(`${med.medication} - ${med.dosage} - ${med.frequency} `, yPosition);
        });
        yPosition += 5;

        yPosition = addSectionHeader('4. Medication Allergies', yPosition);
        originalQuestionnaireData.medicationAllergies.forEach(allergy => {
            yPosition = addRegularText(`• ${allergy} `, yPosition);
        });
        yPosition += 5;

        yPosition = addSectionHeader('5. Medical History', yPosition);
        yPosition = addRegularText('Current and Past Medical Problems:', yPosition);
        originalQuestionnaireData.medicalHistory.currentAndPastMedicalProblems.forEach(problem => {
            yPosition = addRegularText(`• ${problem} `, yPosition);
        });
        yPosition += 5;
        yPosition = addRegularText('Family History:', yPosition);
        originalQuestionnaireData.medicalHistory.familyHistory.forEach(history => {
            yPosition = addRegularText(`• ${history} `, yPosition);
        });
        yPosition += 5;

        yPosition = addSectionHeader('6. Social History', yPosition);
        yPosition = addRegularText(`Smoking: ${originalQuestionnaireData.socialHistory.smoking} `, yPosition);
        yPosition = addRegularText(`Alcohol: ${originalQuestionnaireData.socialHistory.alcohol} `, yPosition);
        yPosition = addRegularText(`Heavy Drinker: ${originalQuestionnaireData.socialHistory.heavyDrinker} `, yPosition);
        yPosition = addRegularText(`Marital Status: ${originalQuestionnaireData.socialHistory.maritalStatus} `, yPosition);
        yPosition = addRegularText(`Education: ${originalQuestionnaireData.socialHistory.education} `, yPosition);
        yPosition = addRegularText(`Occupation: ${originalQuestionnaireData.socialHistory.occupation} `, yPosition);
        yPosition += 5;

        yPosition = addSectionHeader('7. Current Symptoms', yPosition);
        originalQuestionnaireData.currentSymptoms.forEach(symptom => {
            yPosition = addRegularText(`${symptom.symptom}: ${symptom.present} `, yPosition);
        });
        yPosition += 5;

        yPosition = addSectionHeader('8. Top 3 Questions for Doctor', yPosition);
        originalQuestionnaireData.top3QuestionsForDoctor.forEach((question, index) => {
            yPosition = addRegularText(`${index + 1}. ${question} `, yPosition);
        });
        yPosition += 5;

        yPosition = addSectionHeader('9. Visit Goals and Concerns', yPosition);
        yPosition = addRegularText(`Primary Goal: ${originalQuestionnaireData.visitGoalsAndConcerns.primaryGoal} `, yPosition);
        yPosition += 5;
        yPosition = addRegularText('Top 3 Concerns:', yPosition);
        originalQuestionnaireData.visitGoalsAndConcerns.top3Concerns.forEach((concern, index) => {
            yPosition = addRegularText(`${index + 1}. ${concern} `, yPosition);
        });
    }

    // Save the PDF
    doc.save(filename);
};

function feedbackHandlers() {
    const thumbsUpBtn = document.getElementById("thumbsUpBtn");
    const thumbsDownBtn = document.getElementById("thumbsDownBtn");
    const positiveFeedback = document.getElementById("positiveFeedback");
    const negativeFeedback = document.getElementById("negativeFeedback");
    const feedbackGroup = document.querySelector(".feedback-group");
    const feedbackContainer = document.querySelector('.feedback-container');

    thumbsUpBtn.addEventListener("click", () => {
        feedbackGroup.classList.add("hidden"); // hide question + icons
        positiveFeedback.classList.remove("hidden");
        negativeFeedback.classList.add("hidden");
    });

    thumbsDownBtn.addEventListener("click", () => {
        feedbackGroup.classList.add("hidden"); // hide question + icons
        negativeFeedback.classList.remove("hidden");
        positiveFeedback.classList.add("hidden");
    });

    // Dismiss buttons hide everything
    document.querySelectorAll(".feedback-btn.dismiss").forEach(btn =>
        btn.addEventListener("click", () => {
            positiveFeedback.classList.add("hidden");
            negativeFeedback.classList.add("hidden");
            feedbackContainer.style.display = 'none';
        })
    );

    // Dismiss buttons hide everything
    document.querySelectorAll(".feedback-btn.submit").forEach(btn =>
        btn.addEventListener("click", () => {
            feedbackContainer.innerHTML = 'Thank you for the feedback!';
            setTimeout(() => {
                feedbackContainer.style.display = 'none';
                feedbackContainer.style.backgroundColor = '#642bf3';
            }, 30000);
        })
    );



}

// Initialize app
function init() {
    renderCards();
    attachTabHandlers();
    attachSummaryTabHandlers();
    // attachQuestionnaireTabHandlers();

    // // default selection
    // setActiveTab('summary');
    // generateContent(visitDates[0], 'summary');

    loadEncounterSummary();
    feedbackHandlers();

};

document.addEventListener('DOMContentLoaded', init);