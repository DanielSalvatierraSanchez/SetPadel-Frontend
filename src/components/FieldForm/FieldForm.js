import "./FieldForm.css";

export const FieldForm = ({ inputLabel, inputType, inputPlaceholder }) => {
    return `
    <div class="field-form">
        <label>${inputLabel}</label>
        <input type="${inputType}" placeholder="${inputPlaceholder}" required>
    </div>
    `;
};
