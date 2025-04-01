import "./Profile.css";
import { ProfileForm } from "../../components/Forms/ProfileForm/ProfileForm";
import { createPage } from "../../functions/CreatePage";
import { isAuth } from "../../utils/IsAuth";

export const Profile = () => {
    const div = createPage("Profile");
    const form = document.createElement("form");

    isAuth();

    div.append(form);
    ProfileForm(form);
};
