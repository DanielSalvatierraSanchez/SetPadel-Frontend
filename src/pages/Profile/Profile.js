import "./Profile.css";
import { ProfileForm } from "../../components/Forms/ProfileForm/ProfileForm";
import { createPage } from "../../functions/CreatePage";

export const Profile = () => {
    const div = createPage("Profile");
    const form = document.createElement("form");

    div.append(form);
    ProfileForm(form);
};
