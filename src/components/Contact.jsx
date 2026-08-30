import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { socials } from "../constants/site";
import { styles } from "../styles";

const fieldClass =
  "w-full rounded-sm border border-ink/20 bg-paper px-4 py-3.5 text-lg text-ink outline-none placeholder:text-ink/40 transition-colors focus:border-accent";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .send(
        "service_o3s68ia",
        "template_ofvadhl",
        {
          from_name: form.name,
          to_name: "Toheed",
          from_email: form.email,
          to_email: socials.email,
          message: form.message,
        },
        "A-2YSVBvyMW4n4sjs"
      )
      .then(
        () => {
          setLoading(false);
          setStatus("Sent. I will get back to you soon.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setStatus("Something went wrong. Please email me directly.");
        }
      );
  };

  return (
    <section
      id="contact"
      className={`${styles.section} scroll-mt-24 pb-24 sm:pb-32`}
    >
      <h2 className={styles.sectionHead}>Contact</h2>
      <p className="mt-6 max-w-md font-serif text-2xl font-medium leading-snug tracking-tight sm:text-[1.75rem]">
        The best way to reach me is email.
      </p>

      <div className="mt-8 flex flex-col gap-3 font-sans text-lg">
        <a
          href={`mailto:${socials.email}`}
          className="w-fit text-accent transition-colors hover:text-ink"
        >
          {socials.email}
        </a>
        <div className="flex flex-wrap gap-6">
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-ink/70 transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            className="text-ink/70 transition-colors hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={socials.resume}
            target="_blank"
            rel="noreferrer"
            className="text-ink/70 transition-colors hover:text-accent"
          >
            Resume
          </a>
        </div>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-14 flex flex-col gap-6"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <label className="flex flex-col gap-2">
            <span className={styles.label}>Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              autoComplete="name"
              placeholder="Your name"
              className={fieldClass}
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className={styles.label}>Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
              placeholder="you@email.com"
              className={fieldClass}
            />
          </label>
        </div>
        <label className="flex flex-col gap-2">
          <span className={styles.label}>Message</span>
          <textarea
            rows={5}
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="What would you like to discuss?"
            className={`${fieldClass} resize-y min-h-[8rem]`}
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          className="mt-2 inline-flex min-w-[12rem] items-center justify-center rounded-2xl bg-accent px-8 py-3.5 text-lg font-medium text-paper transition-colors hover:bg-ink disabled:opacity-50"
        >
          {loading ? "Sending…" : "Send message"}
        </button>

        {status && <p className="text-base text-ink/70">{status}</p>}
      </form>

      <p className="mt-24 font-sans text-base text-ink/50">
        © {new Date().getFullYear()} Toheed Jamaal
      </p>
    </section>
  );
};

export default Contact;
