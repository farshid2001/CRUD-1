import userShemaModel from "../Shema/user.js";

export const addUser = async (req, res) => {
   try {
      const user = await userShemaModel.create(req.body);
      console.log(user);
      res.status(200).send("user added");
   } catch (err) {
      console.log(err);
      res.status(404).json({ succes: "false", message: "user add error" });
   }
}

export const getUser = async (req, res) => {
   try {
      const fetchUser = await userShemaModel.find(req.body);
      console.log("Fetched Users:", fetchUser);
      res.status(200).json({
         success: true,
         message: "Users fetched successfully",
         data: fetchUser,
      });
   } catch (err) {
      console.error("Error fetching users:", err);

      res.status(500).json({
         success: false,
         message: "An error occurred while fetching users",
         error: err.message, 
      });
   }
};


export const updateUser = async (req,res) => {

   try {
      const updatedUser = await userShemaModel.findByIdAndUpdate(req.params.id, req.body, );
      if (!updatedUser) return res.status(404).json({ error: 'User not found' });
      res.status(200).json(updatedUser);
    console.log("updated succesfully");
   } catch (err) {
      console.log(err);
      console.log("user not get");
      
      
   }
}

export const deleteUser = async (req,res) => {
   try {
      const deletedUser = await userShemaModel.findByIdAndDelete(req.params.id)
      res.status(200).json({ message: 'User deleted successfully' });
   } catch (err) {
      console.log(err);
      console.log("user not deleted");
   }
}