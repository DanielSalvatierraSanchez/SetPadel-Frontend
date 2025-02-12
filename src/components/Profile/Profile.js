import { createPage } from "../../functions/CreatePage";
import { ProfileForm } from "../Forms/ProfileForm/ProfileForm";
import "./Profile.css";

export const Profile = () => {
    const div = createPage("Profile");
    const form = document.createElement("form");

    div.append(form);
    ProfileForm(form);
};
