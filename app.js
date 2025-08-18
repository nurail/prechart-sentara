
// Simplified Patient Completed view: Summary + View Original
function renderPatientCompletedAccordionView() {
    const wrap = elementCreator('div', { class: 'prose' });

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

    const summaryText = clinicalSummaryData.patientOverview + ' ' + clinicalSummaryData.chiefComplaint;
    const summaryBox = elementCreator('div', { class: 'summary-box' }, summaryText);
    wrap.append(createAccordion('Summary', summaryBox, true));

    const actions = elementCreator('div', {});
    const viewBtn = elementCreator('button', { class: 'q-link', type: 'button' }, [
        elementCreator('img', { class: 'icon-16', src: ICONS.view, alt: '' }),
        elementCreator('span', {}, 'View Original')
    ]);
    const dlBtn = elementCreator('button', { class: 'q-link', type: 'button' }, [
        elementCreator('img', { class: 'icon-16', src: ICONS.download, alt: '' }),
        elementCreator('span', {}, 'Download PDF')
    ]);
    actions.append(viewBtn, dlBtn);
    wrap.append(createAccordion('View Original', actions, false));

    viewBtn.addEventListener('click', function() {
        openFullFrameModal(renderPatientQuestionnaireContent());
    });
    dlBtn.addEventListener('click', function() { downloadQuestionnaire('patient-questionnaire-sarah-mitchell.pdf'); });

    return wrap;
}