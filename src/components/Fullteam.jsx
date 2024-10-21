const TeamSlider = () => {
  return (
    <div className="bg-[url('/BG_color.png')] bg-cover bg-center ">
      <div className="flex flex-col md:flex-row items-center justify-between py-36 max-w-[1300px] mx-auto">
        <div className="w-4/12">
          <h2 className="text-[#FF9D00] text-[50px] font-[700]">
            Meet Our Team
          </h2>
          <p className="text-[#1C1C1C] text-[16px] font-[500]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
            tempora impedit quisquam rem! Autem sequi dicta enim omnis
            inventore, ipsam quidem saepe error quibusdam ipsa ad est aliquam
            tenetur, sapiente culpa cum molestias hic doloremque distinctio
            maiores expedita sint sunt deleniti dignissimos. Numquam quia
            molestiae quam eum quo, deleniti dolore id sed aspernatur ducimus
            adipisci maiores eius laboriosam, reiciendis velit. Repellendus
            numquam, dolor quidem quas cupiditate aut.
          </p>
        </div>
        <div className="w-7/12 flex ">
          <div>
            <img src="/teamMember/hem_ch.png" alt="" />
          </div>
          <div>
            <img src="/teamMember/ceo.png" alt="" />
          </div>
          <div>
            <img src="/teamMember/sabya.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSlider;
