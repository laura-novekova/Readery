import Layout from '../components/Layout';
import { DropdownMenu } from '../components/DropdownMenu';

const Contact = () => {
  return (
    <div className="font-serif">
      <Layout />
      <div className="bg-white rounded-t-md mx-16">
        <nav className="flex flex-row align-middle items-center  bg-white px-4">
          <DropdownMenu />
        </nav>
      </div>
      <div className="bg-white rounded-b-md mx-16 p-10">
        <h1 className="font-bold text-4xl mb-2 text-sky-900">Contact Us</h1>
        <div className="py-4">
          <p className="my-4">
            We'd love to hear from you! Whether you have questions, feedback, or
            suggestions, feel free to get in touch with us. Please contact us at
            <b className="ml-1">readery@readery.com</b>
          </p>
          <p className="my-4">
            Thank you for reaching out. We look forward to hearing from you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
