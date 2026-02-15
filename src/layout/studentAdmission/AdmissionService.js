const model = require("./AdmissionModel")
const generate = require("generate-password")
const email = require("../staff/MailConfig")
const AddAdmissionService = async (data) => {
    try {
        const Password=await generate.generate({
            length:5,
            uppercase:true,
            numbers:true,
            symbols:false
        })

        await model.AddAdmissionModel(data.userName, data.firstName, data.lastName, data.gender, data.dateOfBirth, data.aaadharno, data.standard, data.bloodGroup, data.language, data.address, data.state, data.nationality, data.pincode, data.email, data.studentMobileNo, data.fatherName, data.fatherOccupation, data.fatherNumber, data.motherName, data.motherOccupation, data.motherNumber,Password)
        await email.sendMail({
            from: `"School Admin" <${process.env.MAIL_USER}>`,
      to: data.email,
      subject: "Welcome to School Portal",
      html: `
        <h3>Hello ${data.firstName},</h3>
        <p>Your Stadent account has been created successfully.</p>
        <p><b>Username:</b> ${data.userName}</p>
        <p><b>Temporary Password:</b> ${Password}</p>
        <p>Please login and change your password immediately.</p>`
        })
        return
    }
    catch (err) {
        console.log(err)
    }

}
const GetAdmissionService = async () => {
    const result = await model.GetAdmissionModel()
    return result
}
const UpdateAdmissionService = async (data) => {
    const result = await model.UpdateAdmissionModel(data.userName, data.firstName, data.lastName, data.gender, data.dateOfBirth, data.aaadharno, data.standard, data.bloodGroup, data.language, data.address, data.state, data.nationality, data.pincode, data.email, data.studentMobileNo, data.fatherName, data.fatherOccupation, data.fatherNumber, data.motherName, data.motherOccupation, data.motherNumber, data.id)
    return result
}
const DeleteAdmissionService = async (data) => {
    const result = await model.DeleteAdmissionModel(data.id)
    return result
}
module.exports = { AddAdmissionService, GetAdmissionService, UpdateAdmissionService, DeleteAdmissionService }