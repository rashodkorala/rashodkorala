"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Contact() {
    const [formStatus, setFormStatus] = useState("");
    const access_key = process.env.SECRET_KEY;

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        formData.append("access_key", "b9fe62b9-4f2c-4ea7-86c9-67cb85b87757");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: json,
        });

        const result = await response.json();
        if (result.success) {
            setFormStatus("Message sent successfully!");
            event.currentTarget.reset();
        } else {
            setFormStatus("Something went wrong. Try again.");
        }
    }

    return (
        <div className="flex items-center justify-center p-8 ">
            <div className="max-w-7xl w-full  h-full p-10 rounded-lg min-h-screen">
                <h2 className="text-7xl font-thin mb-6">Contact Me</h2>
                <form onSubmit={handleSubmit} className="space-y-20 font-thin text-2xl p-10">
                    <div className="grid grid-cols-2 gap-8">
                        <Input
                            type="text"
                            name="first_name"
                            placeholder="First Name *"
                            required
                            className="border-b-2  focus:border-orange-600 outline-none py-2 border-slate-400"
                        />
                        <Input
                            type="text"
                            name="last_name"
                            placeholder="Last Name *"
                            required
                            className="border-b-2  focus:border-orange-600 outline-none py-2 border-slate-400"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        <Input
                            type="email"
                            name="email"
                            placeholder="Email *"
                            required
                            className="border-b-2  focus:border-orange-600 outline-none py-2 border-slate-400"
                        />
                        <Input
                            type="tel"
                            name="phone_number"
                            placeholder="Phone Number"
                            className="border-b-2  focus:border-orange-600 outline-none py-2 border-slate-400"
                        />
                    </div>
                    <Textarea
                        name="message"
                        placeholder="Message *"
                        required
                        className="border-b-2  focus:border-orange-600 outline-none py-2 border-slate-400 h-56"

                    />
                    <Button
                        variant={"default"}
                        type="submit"
                        
                        className="border-2  hover:border-orange-600 outline-none p-4 border-slate-400 text-lg"
                    >
                        Send Message
                    </Button>

                    {formStatus && <p className="text-green-600 mt-4 font-thin">{formStatus}</p>}
                </form>
            </div>
        </div>
    );
}
