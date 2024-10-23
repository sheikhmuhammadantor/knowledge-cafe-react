import profile from "../assets/profile.png";

const Header = () => {
  return (
    <div>
      {/* Header Section */}
      <section className="flex justify-between border p-4 rounded-lg mt-8">
        {/* Header */}
        <h1 className="text-3xl font-semibold">Knowledge Cafe</h1>
        {/* Profile Image */}
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 h-12 rounded-full ring-2 ring-offset-2">
            <img src={profile} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
