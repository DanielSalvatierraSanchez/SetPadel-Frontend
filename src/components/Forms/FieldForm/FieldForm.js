import "./FieldForm.css";

export const FieldForm = ({ divClass, inputLabel, inputType, inputPlaceholder, inputClass, max = Infinity }) => {
    return `
    <div class="field-form ${divClass}">
        <label>${inputLabel}</label>
        <input type="${inputType}" class="${inputClass}" placeholder="${inputPlaceholder}" max="${max}">
    </div>
    `;
};

export const FieldSelect = ({ divClass, inputLabel, inputClass, inputOption1, inputOption2 }) => {
    return `
    <div class="field-select ${divClass}">
        <label>${inputLabel}</label>
        <select class="${inputClass}">
            <option value="${inputOption1}">${inputOption1}</option>
            <option value="${inputOption2}">${inputOption2}</option>
        </select>
    </div>
    `;
};
