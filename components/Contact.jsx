import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import toast from "react-hot-toast";

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_ACCESS_KEY,
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      e.target.reset();
      toast.success("Message sent successfully.");
    } else {
      toast.error("Failed to send the message");
    }
  };
  return (
    <div className="relative flex flex-col w-full">
      {/* Navbar heading */}
      <h1 className="text-xl font-bold">Contact</h1>
      {/* end Navbar heading */}

      <div className="relative flex flex-col justify-center">
        <p className="text-center p-2">
          Feel free to reach out if you have any questions or would like to
          collaborate!
        </p>

        {/* form */}
        <form
          onSubmit={handleSubmit}
          className="relative flex flex-col p-2 gap-6"
        >
          <div className="flex flex-col">
            <Label htmlFor="name">Name:</Label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="flex flex-col">
            <Label htmlFor="email">Email:</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="flex flex-col">
            <Label htmlFor="message">Message:</Label>
            <Textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Your Message..."
              required
            ></Textarea>
          </div>

          <div className="text-center">
            <Button variant="submit" type="submit">
              Send Message
            </Button>
          </div>
        </form>

        {/* end form */}
      </div>
    </div>
  );
};
export default Contact;
