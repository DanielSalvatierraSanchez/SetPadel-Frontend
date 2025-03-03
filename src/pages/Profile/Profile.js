import "./Profile.css";
import { createPage } from "../../functions/CreatePage";
import { ProfileForm } from "../../components/Forms/ProfileForm/ProfileForm";

export const Profile = () => {
    const div = createPage("Profile");
    const form = document.createElement("form");

    div.append(form);
    ProfileForm(form);
};
