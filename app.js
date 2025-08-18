// Icons
const ICONS = {
    avaamo: 'https://s3.us-west-1.amazonaws.com/static.aiavaamo.com/icons/avaamo_icon.svg',
    clock: 'https://s3.us-west-1.amazonaws.com/static.aiavaamo.com/icons/clock_icon.svg',
    download: 'https://s3.us-west-1.amazonaws.com/static.aiavaamo.com/icons/download_pdf_icon.svg',
    chevronDown: 'https://s3.us-west-1.amazonaws.com/static.aiavaamo.com/icons/fi_chevron-down.svg',
    imaging: 'https://s3.us-west-1.amazonaws.com/static.aiavaamo.com/icons/imaging_icon.svg',
    meds: 'https://s3.us-west-1.amazonaws.com/static.aiavaamo.com/icons/medications_icon.svg',
    tests: 'https://s3.us-west-1.amazonaws.com/static.aiavaamo.com/icons/test_results_icon.svg',
    view: 'https://s3.us-west-1.amazonaws.com/static.aiavaamo.com/icons/view_pdf_icon.svg'
};

// Data model for right-pane cards (with icons)
const listViewData = [{
        id: 'medications',
        title: 'Medications',
        icon: ICONS.meds,
        bullets: [
            'Topiramate 50mg BID (start: 2025-04-03)',
            'Sumatriptan 50mg PRN migraine (last refill: 2025-06-01)',
            'Sertraline 50mg daily',
        ],
        highlight: [
            'Track start date, dose, last refill',
            'Flag high-risk meds or non-adherence',
        ],
    },
    {
        id: 'labs',
        title: 'Recent Test Results',
        icon: ICONS.tests,
        bullets: [
            'CBC/CMP: within baseline',
            'B12 520 pg/mL; Folate normal; TSH 1.8 µIU/mL',
            'ESR/CRP normal',
        ],
    },
    {
        id: 'imaging',
        title: 'Imaging',
        icon: ICONS.imaging,
        bullets: [
            'MRI Brain (2024-11-05): no acute findings',
            'EEG (2025-06-10): normal, no epileptiform discharges',
            'No EMG/NCS to date',
        ],
    },
];

// Simulated visit dates - matching the dates in visitSamples JSON
const visitDates = [
    '2025-8-20',
    '2025-06-05',
    '2025-04-18',
    '2024-01-10',
    '2024-11-15',
];

// Data model for left-pane cards (5 dates)
const visitSamples = [{
        "date": "2025-08-20",
        "Chief Complaint": "Routine check-up, no headaches.",
        "History of Present Illness": "Patient reports feeling well over the past month with no headache episodes. Sleep is regular and CPAP therapy compliance is >90%. No new neurological symptoms, such as weakness, numbness, or visual disturbances.",
        "Past Medical History": "Migraines diagnosed in 2021; mild hypertension controlled with medication; mild obstructive sleep apnea diagnosed 2025.",
        "Past Surgical History": "Appendectomy in 2018, no complications.",
        "Medications & Allergies": "Lisinopril 10 mg daily; no current pain medications. Allergic to penicillin (rash).",
        "Family History": "Father has history of migraines; mother healthy.",
        "Social History": "Non-smoker, occasional coffee, works night shifts, exercises moderately twice a week.",
        "Review of Systems": "Denies headaches, dizziness, weakness, numbness, visual changes, speech difficulty, or syncope. No cardiovascular, respiratory, or gastrointestinal complaints.",
        "Physical Examination": "Vital signs stable. Neurological exam normal: cranial nerves II-XII intact, strength 5/5 in all extremities, sensation intact, reflexes 2+, gait normal.",
        "Imaging/Lab Results": "No new imaging or labs. Prior labs normal.",
        "Assessment": "Patient is neurologically stable. Headaches resolved with adherence to CPAP and lifestyle modifications.",
        "Plan": "Continue CPAP therapy nightly. Maintain regular sleep schedule and hydration. Encourage aerobic exercise. Annual follow-up recommended, or sooner if symptoms recur.",
        // "Summary": "Patient is symptom-free with excellent CPAP adherence. Neurological exam normal. No headache episodes reported. Continue current management plan.",
        "Summary": "Patient presented for routine follow-up and reports being symptom-free over the past month. Headaches have completely resolved with consistent CPAP use and improved sleep hygiene. No new neurological complaints or changes in physical examination findings. Patient demonstrates good understanding of therapy compliance and lifestyle recommendations. Continue current management and monitor periodically.",
        "Encounter Details": {
            "Speciality": "Neurology",
            "Encounter ID": "NEU20250820A",
            "Date & Time": "August 20, 2025, 10:30 AM",
            "Meeting Status": "Completed",
            "Meeting Duration": "30 minutes"
        }
    },
    {
        "date": "2025-06-05",
        "Chief Complaint": "Follow-up after CPAP mask change.",
        "History of Present Illness": "Patient reports headaches reduced to 1–2 times/week after switching to a new nasal CPAP mask. Headaches are mild, last 30–60 minutes, occasionally associated with mild photophobia. No nausea or vomiting.",
        "Past Medical History": "Migraines, mild hypertension, mild sleep apnea.",
        "Past Surgical History": "Appendectomy in 2018.",
        "Medications & Allergies": "Lisinopril 10 mg daily. Allergic to penicillin (rash).",
        "Family History": "Father has history of migraines.",
        "Social History": "Non-smoker, occasional coffee, continues night shifts, exercises 1–2 times/week.",
        "Review of Systems": "Positive for mild headaches; otherwise negative. Denies weakness, numbness, vision or speech changes.",
        "Physical Examination": "Vitals stable. Neurological exam normal. Cranial nerves intact. Strength, sensation, and reflexes within normal limits. Gait normal.",
        "Imaging/Lab Results": "No new imaging or labs; prior MRI and labs stable.",
        "Assessment": "Significant improvement in headache frequency and severity with CPAP compliance.",
        "Plan": "Continue CPAP nightly. Maintain reduced caffeine intake and regular sleep schedule. Follow-up in 4 months or sooner if headaches worsen.",
        // "Summary": "Patient demonstrates significant improvement in headaches after CPAP mask change. Mild infrequent headaches remain. Neurological status stable.",
        "Summary": "Patient presented for follow-up after CPAP mask change. Headache frequency and severity have improved significantly, now occurring only 1–2 times per week. Mild photophobia noted but otherwise symptoms well controlled. Neurological examination remains normal, and vitals stable. Patient educated on continuing therapy compliance, lifestyle modifications, and monitoring triggers. Plan to maintain current therapy and review progress at the next scheduled visit.",
        "Encounter Details": {
            "Speciality": "Neurology",
            "Encounter ID": "NEU20250605B",
            "Date & Time": "June 5, 2025, 9:00 AM",
            "Meeting Status": "Completed",
            "Meeting Duration": "25 minutes"
        }
    },
    {
        "date": "2025-04-18",
        "Chief Complaint": "Increased headaches after stopping CPAP.",
        "History of Present Illness": "Patient discontinued CPAP therapy due to mask discomfort. Reports headaches 4–5 days/week, lasting 1–2 hours, sometimes associated with light sensitivity. Denies nausea, vomiting, or new neurological deficits.",
        "Past Medical History": "Migraines, mild hypertension, mild sleep apnea.",
        "Past Surgical History": "Appendectomy in 2018.",
        "Medications & Allergies": "Lisinopril 10 mg daily. Allergic to penicillin (rash).",
        "Family History": "Father with migraines.",
        "Social History": "Non-smoker, coffee 2x/day, night shifts continue, limited exercise.",
        "Review of Systems": "Positive for headaches and photophobia. Denies weakness, numbness, visual or speech changes, syncope, chest pain, or shortness of breath.",
        "Physical Examination": "Vitals: BP 142/90 mmHg. Neurological exam normal. Cranial nerves II-XII intact. Strength 5/5, sensation normal, reflexes 2+. Gait normal.",
        "Imaging/Lab Results": "No new imaging; prior labs normal.",
        "Assessment": "Worsening headaches likely secondary to untreated sleep apnea.",
        "Plan": "Restart CPAP therapy with alternative mask type. Refer to sleep specialist. Recommend headache diary and monitor frequency and severity.",
        // "Summary": "Headaches worsened after CPAP discontinuation. Neurological exam unchanged. CPAP restarted with new mask and referred for sleep follow-up.",
        "Summary": "Patient reports worsening headaches after discontinuing CPAP therapy. Headaches now occur 4–5 times per week and are occasionally associated with photophobia. No neurological deficits were noted on examination. Education provided regarding the importance of CPAP adherence and mask selection. Referred to sleep specialist for further management and advised to keep a detailed headache diary. Therapy compliance emphasized to prevent further symptom escalation.",
        "Encounter Details": {
            "Speciality": "Neurology",
            "Encounter ID": "NEU20250418C",
            "Date & Time": "April 18, 2025, 11:00 AM",
            "Meeting Status": "Completed",
            "Meeting Duration": "30 minutes"
        }
    },
    {
        "date": "2025-01-10",
        "Chief Complaint": "Follow-up for headaches after sleep study.",
        "History of Present Illness": "Patient reports headaches decreased to twice per week since sleep schedule adjustments. Sleep study confirmed mild obstructive sleep apnea. No new neurological symptoms.",
        "Past Medical History": "Migraines, mild hypertension, mild sleep apnea.",
        "Past Surgical History": "Appendectomy in 2018.",
        "Medications & Allergies": "Lisinopril 10 mg daily; started CPAP therapy. Allergic to penicillin (rash).",
        "Family History": "Father with migraines.",
        "Social History": "Non-smoker, reduced coffee to one cup daily, continues night shifts, exercises moderately.",
        "Review of Systems": "Positive for occasional mild headaches; denies dizziness, weakness, numbness, or visual changes.",
        "Physical Examination": "Vitals: BP 130/84 mmHg. Neurological exam normal. Cranial nerves intact, motor and sensory exam normal, reflexes 2+, gait steady.",
        "Imaging/Lab Results": "Sleep study reviewed; no other imaging.",
        "Assessment": "Improved headache control with lifestyle changes and CPAP therapy.",
        "Plan": "Continue nightly CPAP, maintain reduced caffeine intake, monitor headache frequency, follow-up in 3 months.",
        // "Summary": "Patient reports improved headache control with CPAP therapy and lifestyle changes. No new neurological deficits noted.",
        "Summary": "Patient demonstrated improvement in headache frequency after adjusting sleep schedule and initiating CPAP therapy. Headaches now occur only twice per week and are mild. No new neurological deficits noted. Patient adheres well to therapy, understands lifestyle recommendations, and is motivated to continue compliance. Reinforced importance of sleep hygiene, caffeine moderation, and follow-up monitoring.",
        "Encounter Details": {
            "Speciality": "Neurology",
            "Encounter ID": "NEU20250110D",
            "Date & Time": "January 10, 2025, 2:00 PM",
            "Meeting Status": "Completed",
            "Meeting Duration": "20 minutes"
        }
    },
    {
        "date": "2024-11-15",
        "Chief Complaint": "Frequent morning headaches for the past two months.",
        "History of Present Illness": "Patient reports dull headaches almost daily, worse upon waking, lasting 1–2 hours. No associated nausea, vomiting, visual disturbances, or weakness.",
        "Past Medical History": "Migraines diagnosed in 2021; mild hypertension.",
        "Past Surgical History": "Appendectomy in 2018.",
        "Medications & Allergies": "Lisinopril 10 mg daily. Allergic to penicillin (rash).",
        "Family History": "Father with migraines.",
        "Social History": "Non-smoker, drinks coffee twice daily, works night shifts, minimal exercise.",
        "Review of Systems": "Positive for headaches; denies other neurological or systemic complaints.",
        "Physical Examination": "Vitals: BP 138/88 mmHg. Neurological exam normal: cranial nerves II-XII intact, motor/sensory exam normal, reflexes 2+, gait steady.",
        "Imaging/Lab Results": "No imaging performed; basic labs within normal limits.",
        "Assessment": "Morning headaches likely related to poor sleep and possible sleep apnea.",
        "Plan": "Recommend sleep study, adjust sleep schedule, monitor headache frequency.",
        // "Summary": "Patient experiencing frequent morning headaches. Neurological exam normal. Likely related to sleep disruption. Sleep study and lifestyle adjustments recommended.",
        "Summary": "Patient reports frequent morning headaches over the past two months, predominantly occurring upon waking and lasting 1–2 hours. Headaches are dull and not associated with neurological deficits. Examination and vitals are within normal limits. Suspected underlying sleep disruption, potentially mild sleep apnea. Sleep study recommended, lifestyle adjustments suggested, and follow-up planned to evaluate response to interventions.",
        "Encounter Details": {
            "Speciality": "Neurology",
            "Encounter ID": "NEU20241115E",
            "Date & Time": "November 15, 2024, 10:00 AM",
            "Meeting Status": "Completed",
            "Meeting Duration": "25 minutes"
        }
    }
];

// Clinical Summary data
const clinicalSummaryData = {
    title: "Clinical Summary - Sarah Mitchell (Pre-Consultation Brief)",
    patientOverview: "Sarah Mitchell, 45-year-old female presenting for neurological evaluation of progressive headaches, dizziness, and cognitive concerns.",
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
        { symptom: "Headaches", status: "Daily, worsening", clinicalSignificance: "Primary concern - rule out secondary causes" },
        { symptom: "Dizziness", status: "Present", clinicalSignificance: "May suggest vestibular or vascular etiology" },
        { symptom: "Memory Loss", status: "Present", clinicalSignificance: "Concerning given family history of dementia" },
        { symptom: "Attention/Concentration", status: "Impaired", clinicalSignificance: "Affecting occupational function" },
        { symptom: "Sleep Disturbance", status: "Present", clinicalSignificance: "May contribute to cognitive symptoms" }
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
    patientGoals: "Seeking diagnosis and treatment plan for headaches and memory concerns, particularly worried about family history of Alzheimer's disease."
};

// Original Questionnaire data
const originalQuestionnaireData = {
    patientInformation: {
        patientName: "Sarah Mitchell",
        dateOfBirth: "March 15, 1978",
        handYouWriteWith: "R (Right)"
    },
    chiefComplaint: "I've been experiencing frequent headaches for the past 6 months, along with episodes of dizziness and some memory issues. The headaches are getting worse and more frequent, occurring almost daily now. I'm also having trouble concentrating at work and sometimes feel confused about simple tasks.",
    currentMedications: [
        { medication: "Lisinopril", dosage: "10mg", frequency: "Once daily" },
        { medication: "Metformin", dosage: "500mg", frequency: "Twice daily" },
        { medication: "Ibuprofen", dosage: "400mg", frequency: "As needed for headaches" },
        { medication: "Vitamin D3", dosage: "2000 IU", frequency: "Once daily" }
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
            const grid = elementCreator('div', { class: 'kv' });
            // Avoid Array.flatMap for broader compatibility
            section.entries.forEach(function(e) {
                grid.append(elementCreator('div', { class: 'k' }, e.label));
                grid.append(elementCreator('div', { class: 'v' }, e.value));
            });
            bodyChildren.push(grid);
        }
        if (section.bullets && section.bullets.length) {
            const list = elementCreator('ul', { class: 'bullets' });
            section.bullets.forEach(function(text) {
                list.append(elementCreator('li', {}, text));
            });
            bodyChildren.push(list);
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
            headerChildren.push(elementCreator('img', { class: 'icon-16', src: section.icon, alt: '' }));
        }
        headerChildren.push(elementCreator('span', { class: 'card-title' }, section.title));

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

function renderDateRail() {
    const rail = document.getElementById('date-rail');
    rail.innerHTML = '';
    visitDates.forEach((iso, idx) => {
        const date = new Date(iso);
        const dateLabel = date.getDate().toString().padStart(2, '0');
        const monthLabel = date.toString().split(" ")[1];
        const chip = elementCreator('button', { class: 'date-chip', role: 'tab', 'aria-selected': idx === 0 ? 'true' : 'false' });
        chip.textContent = monthLabel + ' ' + dateLabel;
        chip.dataset.iso = iso;
        if (idx === 0) chip.classList.add('is-active');
        chip.addEventListener('click', () => selectDate(iso, chip));
        rail.append(chip);
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
    document.getElementById('tab-visit').addEventListener('click', () => {
        setActiveTab('visit');
        // re-generate for current date
        var activeEl = document.querySelector('.date-chip.is-active');
        var activeDateIso = activeEl ? activeEl.dataset.iso : null;
        if (activeDateIso) generateContent(activeDateIso, 'visit');
    });
    document.getElementById('tab-questionnaire').addEventListener('click', () => {
        setActiveTab('questionnaire');
        // Load questionnaire content when switching to questionnaire tab
        loadQuestionnaireContent();
    });
};

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
    const containerId = tab === 'visit' ? 'visit-pane' : 'questionnaire-pane';
    const container = document.getElementById(containerId);
    showSkeleton(container);

    // Simulate AI generation delay
    const delayMs = 1000 + Math.random() * 700;
    setTimeout(() => {
        const dateFmt = new Date(iso).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'short',
            day: '2-digit'
        });
        var content;
        if (tab === 'visit') {
            // Find matching visit data by normalized date
            var targetIso = normalizeDateIso(iso);
            var visitData = null;
            for (var i = 0; i < visitSamples.length; i++) {
                if (normalizeDateIso(visitSamples[i].date) === targetIso) {
                    visitData = visitSamples[i];
                    break;
                }
            }
            if (!visitData) {
                // Fallback to first entry if no match
                visitData = visitSamples[0];
            }
            content = renderVisitSummaryFromJSON(visitData, dateFmt);
            // Insert horizontal date pills above content per design
            const pills = elementCreator('div', { class: 'date-pills' });
            visitDates.forEach(function(dIso, idx) {
                const d = new Date(dIso);
                const label = d.toLocaleDateString(undefined, { month: 'short', day: '2-digit' });
                const pill = elementCreator('button', { class: 'date-pill', 'aria-pressed': 'false' });
                pill.dataset.iso = dIso;
                const dateLine = elementCreator('span', { class: 'date-line' }, label);
                const status = idx === 0 ? 'Current' : 'Completed';
                const statusLine = elementCreator('span', { class: 'status-line' }, status);
                pill.append(dateLine, statusLine);
                pill.addEventListener('click', function() { selectDate(dIso); });
                if (normalizeDateIso(dIso) === normalizeDateIso(iso)) {
                    pill.classList.add('is-active');
                    pill.setAttribute('aria-pressed', 'true');
                }
                pills.append(pill);
            });
            const wrapDiv = elementCreator('div');
            wrapDiv.append(pills, content);
            content = wrapDiv;
        } else {
            // Questionnaire content is now handled separately
            loadQuestionnaireContent();
            return;
        }
        container.innerHTML = '';
        container.append(content);
    }, delayMs);
};

function loadQuestionnaireContent() {
    // Load the default questionnaire tab (visit questionnaire)
    setActiveQuestionnaireTab('visit-questionnaire');
    loadVisitQuestionnaire();
};

function loadVisitQuestionnaire() {
    const container = document.getElementById('visit-questionnaire-content');
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
    "status": "completed",
    "subject": { "reference": "Patient/eBJiv3SI2EuZFZSbARSALJz1qvR2nrHiiztqv0dgm9yM3", "display": "Johnson, Ken" },
    "encounter": { "reference": "Encounter/et2BlG8rMcWAICw5GbF58AP2Qdnk9wkJy2jt1u7cM5Mg3" },
    "authored": "2021-08-30T21:08:11Z",
    "source": { "reference": "Patient/eBJiv3SI2EuZFZSbARSALJz1qvR2nrHiiztqv0dgm9yM3", "display": "Johnson, Ken" },
    "item": [
        { "linkId": "325236236|220423|55545", "text": "On a scale from one to ten, rate your back pain in severity (range: 1 - 10)", "answer": [{ "valueDecimal": 7 }] },
        { "linkId": "325236236|220424|55545", "text": "When did you notice your back pain intensify?", "answer": [{ "valueDate": "2021-08-08" }] },
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
    return `Back pain severity ${sev ? ansMap[sev] : 'n/a'}/10; worsened around ${intensified ? ansMap[intensified] : 'n/a'}; worst ${whenMost ? ansMap[whenMost] : 'n/a'}; meds helpful: ${meds ? ansMap[meds] : 'n/a'}; score: ${score ? ansMap[score] : 'n/a'}.`;
}

function renderCompletedFromQuestionnaireResponse(qr) {
    const wrap = elementCreator('div', { class: 'prose' });

    const summaryText = summariseQuestionnaireResponse(qr);
    wrap.append(elementCreator('div', { class: 'summary-box' }, summaryText));

    // Accordion with parsed Q/A rows
    const dataDiv = elementCreator('div', {});
    const meta = elementCreator('div', { class: 'kv' });
    meta.append(
        elementCreator('div', { class: 'k' }, 'Patient'), elementCreator('div', { class: 'v' }, (qr.subject && qr.subject.display) || '—'),
        elementCreator('div', { class: 'k' }, 'Authored'), elementCreator('div', { class: 'v' }, qr.authored || '—'),
        elementCreator('div', { class: 'k' }, 'Status'), elementCreator('div', { class: 'v' }, qr.status || '—')
    );
    dataDiv.append(meta);

    const table = elementCreator('table', {}, [
        elementCreator('thead', {}, elementCreator('tr', {}, [
            elementCreator('th', {}, 'QUESTION'),
            elementCreator('th', {}, 'ANSWER')
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
                elementCreator('td', {}, it.text || it.linkId),
                elementCreator('td', {}, val)
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
            elementCreator('span', { class: 'encounter-date-chip' }, dateLabel)
        ]);
        const grid = elementCreator('div', { class: 'encounter-grid' });
        const fields = ['Speciality', 'Encounter ID', 'Date & Time', 'Meeting Status', 'Meeting Duration'];
        for (var i = 0; i < fields.length; i++) {
            const key = fields[i];
            const value = encounter[key] || '';
            const item = elementCreator('div', { class: 'encounter-item' }, [
                elementCreator('div', { class: 'label' }, key),
                elementCreator('div', { class: 'value' + (key === 'Meeting Status' ? ' status' : '') }, value)
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

function renderClinicalSummary() {
    const wrap = elementCreator('div', { class: 'clinical-summary' });

    // Header with actions (View Original, Download PDF)
    const header = elementCreator('div', { class: 'q-header' });
    const title = elementCreator('h3', {}, clinicalSummaryData.title);
    const actions = elementCreator('div', { class: 'q-actions' });
    const viewOriginal = elementCreator('button', { class: 'q-link', type: 'button' }, [
        elementCreator('img', { class: 'icon-16', src: ICONS.view, alt: '' }),
        elementCreator('span', {}, 'View Original')
    ]);
    const downloadBtn = elementCreator('button', { class: 'q-link', type: 'button' }, [
        elementCreator('img', { class: 'icon-16', src: ICONS.download, alt: '' }),
        elementCreator('span', {}, 'Download PDF')
    ]);
    actions.append(viewOriginal, downloadBtn);
    header.append(title, actions);
    wrap.append(header);

    // Patient Overview
    const patientOverview = elementCreator('h4', {}, 'Patient Overview');
    const patientOverviewText = elementCreator('p', {}, clinicalSummaryData.patientOverview);
    wrap.append(patientOverview, patientOverviewText);

    // Chief Complaint
    const chiefComplaint = elementCreator('h4', {}, 'Chief Complaint');
    const chiefComplaintText = elementCreator('p', {}, clinicalSummaryData.chiefComplaint);
    wrap.append(chiefComplaint, chiefComplaintText);

    // Relevant Medical History
    const relevantMedicalHistory = elementCreator('h4', {}, 'Relevant Medical History');
    const relevantMedicalHistoryList = elementCreator('ul', {}, [
        elementCreator('li', {}, 'Comorbidities: ' + clinicalSummaryData.relevantMedicalHistory.comorbidities.join(', ')),
        elementCreator('li', {}, 'Prior Surgery: ' + clinicalSummaryData.relevantMedicalHistory.priorSurgery),
        elementCreator('li', {}, 'Current Medications: ' + clinicalSummaryData.relevantMedicalHistory.currentMedications.join(', ')),
        elementCreator('li', {}, 'Allergies: ' + clinicalSummaryData.relevantMedicalHistory.allergies.join(', '))
    ]);
    wrap.append(relevantMedicalHistory, relevantMedicalHistoryList);

    // Significant Family History
    const significantFamilyHistory = elementCreator('h4', {}, 'Significant Family History');
    const significantFamilyHistoryList = elementCreator('ul', {}, [
        elementCreator('li', {}, 'Neurological: ' + clinicalSummaryData.significantFamilyHistory.neurological.join(', ')),
        elementCreator('li', {}, 'Cardiovascular/Metabolic: ' + clinicalSummaryData.significantFamilyHistory.cardiovascularMetabolic.join(', '))
    ]);
    wrap.append(significantFamilyHistory, significantFamilyHistoryList);

    // Current Neurological Symptoms Table
    const currentNeurologicalSymptoms = elementCreator('h4', {}, 'Current Neurological Symptoms');
    const symptomsTable = elementCreator('table', {}, [
        elementCreator('thead', {}, elementCreator('tr', {}, [
            elementCreator('th', {}, 'SYMPTOM'),
            elementCreator('th', {}, 'STATUS'),
            elementCreator('th', {}, 'CLINICAL SIGNIFICANCE')
        ])),
        elementCreator('tbody', {}, clinicalSummaryData.currentNeurologicalSymptoms.map(symptom =>
            elementCreator('tr', {}, [
                elementCreator('td', {}, symptom.symptom),
                elementCreator('td', {}, symptom.status),
                elementCreator('td', {}, symptom.clinicalSignificance)
            ])
        ))
    ]);
    wrap.append(currentNeurologicalSymptoms, symptomsTable);

    // Clinical Considerations
    const clinicalConsiderations = elementCreator('h4', {}, 'Clinical Considerations');
    const clinicalConsiderationsList = elementCreator('ul', {}, [
        elementCreator('li', {}, 'Differential Diagnosis: ' + clinicalSummaryData.clinicalConsiderations.differentialDiagnosis.join(', ')),
        elementCreator('li', {}, 'Risk Factors: ' + clinicalSummaryData.clinicalConsiderations.riskFactors.join(', ')),
        elementCreator('li', {}, 'Red Flags: ' + clinicalSummaryData.clinicalConsiderations.redFlags.join(', '))
    ]);
    wrap.append(clinicalConsiderations, clinicalConsiderationsList);

    // Recommended Assessment Focus
    const recommendedAssessmentFocus = elementCreator('h4', {}, 'Recommended Assessment Focus');
    const recommendedAssessmentFocusList = elementCreator('ul', {},
        clinicalSummaryData.recommendedAssessmentFocus.map(item => elementCreator('li', {}, item))
    );
    wrap.append(recommendedAssessmentFocus, recommendedAssessmentFocusList);

    // Patient Goals
    const patientGoals = elementCreator('h4', {}, 'Patient Goals');
    const patientGoalsText = elementCreator('p', {}, clinicalSummaryData.patientGoals);
    wrap.append(patientGoals, patientGoalsText);

    // Event listeners
    viewOriginal.addEventListener('click', function() {
        openFullFrameModal(renderPatientQuestionnaireContent());
    });

    downloadBtn.addEventListener('click', function() {
        downloadQuestionnaire('clinical-questionnaire-sarah-mitchell.pdf');
    });

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
    const chiefComplaint = elementCreator('h4', {}, '2. Chief Complaint');
    const chiefComplaintText = elementCreator('p', {}, originalQuestionnaireData.chiefComplaint);
    wrap.append(chiefComplaint, chiefComplaintText);

    // Current Medications
    const currentMedications = elementCreator('h4', {}, '3. Current Medications');
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
    const medicationAllergies = elementCreator('h4', {}, '4. Medication Allergies');
    const medicationAllergiesList = elementCreator('ul', {},
        originalQuestionnaireData.medicationAllergies.map(allergy => elementCreator('li', {}, allergy))
    );
    wrap.append(medicationAllergies, medicationAllergiesList);

    // Medical History
    const medicalHistory = elementCreator('h4', {}, '5. Medical History');
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
    const socialHistory = elementCreator('h4', {}, '6. Social History');
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
    const currentSymptoms = elementCreator('h4', {}, '7. Current Symptoms');
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
    const top3Questions = elementCreator('h4', {}, '8. Top 3 Questions for Doctor');
    const top3QuestionsList = elementCreator('ol', {},
        originalQuestionnaireData.top3QuestionsForDoctor.map((question, index) =>
            elementCreator('li', {}, question)
        )
    );
    wrap.append(top3Questions, top3QuestionsList);

    // Visit Goals and Concerns
    const visitGoals = elementCreator('h4', {}, '9. Visit Goals and Concerns');
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
        downloadQuestionnaire('patient-questionnaire-sarah-mitchell.pdf');
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

    // Chief Complaint
    const chiefComplaint = elementCreator('h4', {}, '2. Chief Complaint');
    const chiefComplaintText = elementCreator('p', {}, originalQuestionnaireData.chiefComplaint);
    wrap.append(chiefComplaint, chiefComplaintText);

    // Current Medications
    const currentMedications = elementCreator('h4', {}, '3. Current Medications');
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
    const medicationAllergies = elementCreator('h4', {}, '4. Medication Allergies');
    const medicationAllergiesList = elementCreator('ul', {},
        originalQuestionnaireData.medicationAllergies.map(allergy => elementCreator('li', {}, allergy))
    );
    wrap.append(medicationAllergies, medicationAllergiesList);

    // Medical History
    const medicalHistory = elementCreator('h4', {}, '5. Medical History');
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
    const socialHistory = elementCreator('h4', {}, '6. Social History');
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
    const currentSymptoms = elementCreator('h4', {}, '7. Current Symptoms');
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
    const top3Questions = elementCreator('h4', {}, '8. Top 3 Questions for Doctor');
    const top3QuestionsList = elementCreator('ol', {},
        originalQuestionnaireData.top3QuestionsForDoctor.map((question, index) =>
            elementCreator('li', {}, question)
        )
    );
    wrap.append(top3Questions, top3QuestionsList);

    // Visit Goals and Concerns
    const visitGoals = elementCreator('h4', {}, '9. Visit Goals and Concerns');
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
        yPosition = addSectionHeader('Clinical Summary - Sarah Mitchell (Pre-Consultation Brief)', yPosition);
        yPosition += 5;

        yPosition = addSectionHeader('Patient Overview', yPosition);
        yPosition = addRegularText(clinicalSummaryData.patientOverview, yPosition);
        yPosition += 5;

        yPosition = addSectionHeader('Chief Complaint', yPosition);
        yPosition = addRegularText(clinicalSummaryData.chiefComplaint, yPosition);
        yPosition += 5;

        yPosition = addSectionHeader('Relevant Medical History', yPosition);
        yPosition = addRegularText(`Comorbidities: ${clinicalSummaryData.relevantMedicalHistory.comorbidities.join(', ')}`, yPosition);
        yPosition = addRegularText(`Prior Surgery: ${clinicalSummaryData.relevantMedicalHistory.priorSurgery}`, yPosition);
        yPosition = addRegularText(`Current Medications: ${clinicalSummaryData.relevantMedicalHistory.currentMedications.join(', ')}`, yPosition);
        yPosition = addRegularText(`Allergies: ${clinicalSummaryData.relevantMedicalHistory.allergies.join(', ')}`, yPosition);
        yPosition += 5;

        yPosition = addSectionHeader('Significant Family History', yPosition);
        yPosition = addRegularText(`Neurological: ${clinicalSummaryData.significantFamilyHistory.neurological.join(', ')}`, yPosition);
        yPosition = addRegularText(`Cardiovascular/Metabolic: ${clinicalSummaryData.significantFamilyHistory.cardiovascularMetabolic.join(', ')}`, yPosition);
        yPosition += 5;

        yPosition = addSectionHeader('Current Neurological Symptoms', yPosition);
        clinicalSummaryData.currentNeurologicalSymptoms.forEach(symptom => {
            yPosition = addRegularText(`${symptom.symptom}: ${symptom.status} - ${symptom.clinicalSignificance}`, yPosition);
        });
        yPosition += 5;

        yPosition = addSectionHeader('Clinical Considerations', yPosition);
        yPosition = addRegularText(`Differential Diagnosis: ${clinicalSummaryData.clinicalConsiderations.differentialDiagnosis.join(', ')}`, yPosition);
        yPosition = addRegularText(`Risk Factors: ${clinicalSummaryData.clinicalConsiderations.riskFactors.join(', ')}`, yPosition);
        yPosition = addRegularText(`Red Flags: ${clinicalSummaryData.clinicalConsiderations.redFlags.join(', ')}`, yPosition);
        yPosition += 5;

        yPosition = addSectionHeader('Recommended Assessment Focus', yPosition);
        clinicalSummaryData.recommendedAssessmentFocus.forEach(item => {
            yPosition = addRegularText(`• ${item}`, yPosition);
        });
        yPosition += 5;

        yPosition = addSectionHeader('Patient Goals', yPosition);
        yPosition = addRegularText(clinicalSummaryData.patientGoals, yPosition);

    } else {
        // Patient Questionnaire PDF
        yPosition = addSectionHeader('Completed Neurology Patient Questionnaire', yPosition);
        yPosition += 5;

        yPosition = addSectionHeader('1. Patient Information', yPosition);
        yPosition = addRegularText(`Patient Name: ${originalQuestionnaireData.patientInformation.patientName}`, yPosition);
        yPosition = addRegularText(`Date of Birth: ${originalQuestionnaireData.patientInformation.dateOfBirth}`, yPosition);
        yPosition = addRegularText(`Hand You Write With: ${originalQuestionnaireData.patientInformation.handYouWriteWith}`, yPosition);
        yPosition += 5;

        yPosition = addSectionHeader('2. Chief Complaint', yPosition);
        yPosition = addRegularText(originalQuestionnaireData.chiefComplaint, yPosition);
        yPosition += 5;

        yPosition = addSectionHeader('3. Current Medications', yPosition);
        originalQuestionnaireData.currentMedications.forEach(med => {
            yPosition = addRegularText(`${med.medication} - ${med.dosage} - ${med.frequency}`, yPosition);
        });
        yPosition += 5;

        yPosition = addSectionHeader('4. Medication Allergies', yPosition);
        originalQuestionnaireData.medicationAllergies.forEach(allergy => {
            yPosition = addRegularText(`• ${allergy}`, yPosition);
        });
        yPosition += 5;

        yPosition = addSectionHeader('5. Medical History', yPosition);
        yPosition = addRegularText('Current and Past Medical Problems:', yPosition);
        originalQuestionnaireData.medicalHistory.currentAndPastMedicalProblems.forEach(problem => {
            yPosition = addRegularText(`• ${problem}`, yPosition);
        });
        yPosition += 5;
        yPosition = addRegularText('Family History:', yPosition);
        originalQuestionnaireData.medicalHistory.familyHistory.forEach(history => {
            yPosition = addRegularText(`• ${history}`, yPosition);
        });
        yPosition += 5;

        yPosition = addSectionHeader('6. Social History', yPosition);
        yPosition = addRegularText(`Smoking: ${originalQuestionnaireData.socialHistory.smoking}`, yPosition);
        yPosition = addRegularText(`Alcohol: ${originalQuestionnaireData.socialHistory.alcohol}`, yPosition);
        yPosition = addRegularText(`Heavy Drinker: ${originalQuestionnaireData.socialHistory.heavyDrinker}`, yPosition);
        yPosition = addRegularText(`Marital Status: ${originalQuestionnaireData.socialHistory.maritalStatus}`, yPosition);
        yPosition = addRegularText(`Education: ${originalQuestionnaireData.socialHistory.education}`, yPosition);
        yPosition = addRegularText(`Occupation: ${originalQuestionnaireData.socialHistory.occupation}`, yPosition);
        yPosition += 5;

        yPosition = addSectionHeader('7. Current Symptoms', yPosition);
        originalQuestionnaireData.currentSymptoms.forEach(symptom => {
            yPosition = addRegularText(`${symptom.symptom}: ${symptom.present}`, yPosition);
        });
        yPosition += 5;

        yPosition = addSectionHeader('8. Top 3 Questions for Doctor', yPosition);
        originalQuestionnaireData.top3QuestionsForDoctor.forEach((question, index) => {
            yPosition = addRegularText(`${index + 1}. ${question}`, yPosition);
        });
        yPosition += 5;

        yPosition = addSectionHeader('9. Visit Goals and Concerns', yPosition);
        yPosition = addRegularText(`Primary Goal: ${originalQuestionnaireData.visitGoalsAndConcerns.primaryGoal}`, yPosition);
        yPosition += 5;
        yPosition = addRegularText('Top 3 Concerns:', yPosition);
        originalQuestionnaireData.visitGoalsAndConcerns.top3Concerns.forEach((concern, index) => {
            yPosition = addRegularText(`${index + 1}. ${concern}`, yPosition);
        });
    }

    // Save the PDF
    doc.save(filename);
};

// Initialize app
function init() {
    renderCards();
    attachTabHandlers();
    attachQuestionnaireTabHandlers();

    // default selection
    setActiveTab('visit');
    generateContent(visitDates[0], 'visit');
};

document.addEventListener('DOMContentLoaded', init);