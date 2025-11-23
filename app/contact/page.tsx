import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="flex items-center justify-center gap-10 px-8 py-8 lg:grid lg:grid-cols-2">
      {/* contact info */}
      <div className="flex flex-col gap-4 font-serif">
        <h1 className="font-serif text-2xl font-bold">Get in touch</h1>
        <div className="flex flex-col">
          <p className="font-bold">Email :</p>
          <p>chillrains.dev@gmail.com</p>
        </div>
        <div>
          <p className="font-bold">Phone :</p>
          <p>+6281-230-154-765</p>
        </div>
        <div>
          <p className="font-bold">Address :</p>
          <p>
            Jalan Praya-Kopang, Desa Pengadang <br />
            Praya Tengah <br />
            Lombok Tengah, NTB
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Follow us</p>
          <div className="flex gap-2.5">
            <FaGithub size={24} />
            <FaLinkedin color="#0b66c2" size={24} />
            <FaFacebook size={24} color="#0766FF" />
            <FaInstagram size={24} color="red" />
          </div>
        </div>
        {/* form input */}
      </div>
    </div>
  );
};

export default Contact;
