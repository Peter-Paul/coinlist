import { useTranslation } from "react-i18next";

function Subscribe() {

    const {t:content} = useTranslation()

    return (  
        <>
            <h4>{content("Subscribe")}</h4>
            <p>{content("SubscribeMsg")}</p>

            <input className="form-control form-control-md shadow text-center" placeholder={content("SubscribeInput")} />
            <div className="d-grid gap-2 mt-2">
                <button className="btn btn-dell-blue" type="button">{content("SubscribeButton")}</button>
            </div>

        </>
    );
}

export default Subscribe;