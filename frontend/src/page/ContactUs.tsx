import React from "react";


const ContactUs = () => {
    return (
        <>
            <div className="flex w-full flex-col lg:flex-row">
                <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center">content
                    <label className="input input-bordered">
                        Name
                        <input type="text" className="grow" placeholder="Daisy" />
                    </label>
                    <label className="input input-bordered ">
                        Email
                        <input type="text" className="grow" placeholder="daisy@site.com" />
                    </label>
                </div>
                <div className="divider lg:divider-horizontal">OR</div>
                <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center">content</div>
            </div>
        </>
    );

}

export default ContactUs;