const generator = require("generate-password");
const model = require("./StaffModel");
const transporter = require("./MailConfig");

const AddStaffService = async (data) => {
  try {
    const Password = generator.generate({
      length: 5,
      numbers: true,
      uppercase: false,
      symbols: false,
    });

    const result = await model.AddStaffModel(
      data.userName,
      data.firstName,
      data.lastName,
      data.dateOfBirth,
      Password,
      data.role,
      data.address,
      data.state,
      data.country,
      data.pincode,
      data.email,
      data.phoneNumber
    );
    await transporter.sendMail({
      from: `"School Admin" <${process.env.MAIL_USER}>`,
      to: data.email,
      subject: "Welcome to School Portal",
      html: `<h3>Hello ${data.firstName},</h3>
        <p>Your staff account has been created successfully.</p>
        <p><b>Username:</b> ${data.userName}</p>
        <p><b>Role:</b> ${data.role}</p>
        <p><b>Temporary Password:</b> ${Password}</p>
        <p>Please login and change your password immediately.</p>`,
    });
    return
  } catch (err) {
    console.log(err);
    throw err;  
  }
};

const GetStaffService = async() => {
    const result=await model.GetStaffModel()
    return result
}
const UpdateStaffService = async(data) => {
    const result=await model.UpdateStaffModel(data.userName,data.firstName,data.lastName,data.dateOfBirth,data.password,data.role,data.address,data.state,data.country,data.pincode,data.email,data.phoneNumber)
    return result
}
const DeleteStaffService = async(data) => {
    const result=await model.DeleteStaffModel(data.id)
    console.log(result,"service")
    return result
}
module.exports={AddStaffService,GetStaffService,UpdateStaffService,DeleteStaffService}