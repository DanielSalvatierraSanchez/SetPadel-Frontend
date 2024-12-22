import "./FieldForm.css";

export const FieldForm = ({ inputLabel, inputType, inputPlaceholder }) => {
    return `
    <div class="field-form">
        <label>${inputLabel}</label>
        <input type="${inputType}" placeholder="${inputPlaceholder}">
    </div>
    `;
};

export const FieldSelect = ({ inputLabel, inputOption1, inputOption2 }) => {
    return `
    <div class="field-select">
        <label>${inputLabel}</label>
        <select>
            <option value="${inputOption1}">${inputOption1}</option>
            <option value="${inputOption2}">${inputOption2}</option>
        </select>
    </div>
    `;
}