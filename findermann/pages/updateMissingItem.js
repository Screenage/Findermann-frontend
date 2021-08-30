import Field from "../Components/Field/Field";
import ImageUpload from "../Components/ImageCard/ImageCard";
import Button from "../Components/Buttons/Button";
function updateMissingItem() {
  return (
    <>
      <div className="container">
        <div className="post_person_box">
          <h3 className="heading">Update Missing Item Details</h3>
          <p className="some_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quis
            excepturi corrupti, rem voluptatum ducimus.
          </p>

          <form action="" id>
            <div className="post_person_info">
              <Field
                text="Category"
                type="text"
                name="category"
                fieldType="Select"
                padding="1.2rem 2rem"
                fontSize="1rem"
                dropDown
              />
              <Field
                text="Sub-Category"
                type="text"
                name="subCategory"
                fieldType="Select"
                padding="1.2rem 2rem"
                fontSize="1rem"
                dropDown
              />
              <Field
                text="Name of item"
                type="text"
                name="nameOfItem"
                fieldType="Input"
                padding="1.2rem 2rem"
                fontSize="1rem"
              />
              <Field
                text="Address"
                type="text"
                name="address"
                fieldType="Input"
                padding="1.2rem 2rem"
                fontSize="1rem"
              />
              <Field
                text="Email"
                type="text"
                name="email"
                fieldType="Input"
                padding="1.2rem 2rem"
                fontSize="1rem"
              />

              <Field
                text="State"
                type="text"
                name="state"
                fieldType="Select"
                padding="1.2rem 2rem"
                fontSize="1rem"
                dropDown
              />
              <Field
                text="Phone Number"
                type="text"
                name="phoneNumber"
                fieldType="Input"
                padding="1.2rem 2rem"
                fontSize="1rem"
              />
              <Field
                text="Local Government"
                type="text"
                name="localGovernment"
                fieldType="Select"
                padding="1.2rem 2rem"
                fontSize="1rem"
                dropDown
              />
              <Field
                text="Reward:"
                type="text"
                name="reward"
                fieldType="Input"
                padding="1.2rem 2rem"
                fontSize="1rem"
              />
              <Field
                text="Status"
                type="text"
                name="status"
                fieldType="Select"
                padding="1.2rem 2rem"
                fontSize="1rem"
                dropDown
              />
              <Field
                text="Police Station to report missing item:"
                type="text"
                name="policeStation"
                fieldType="Input"
                padding="1.2rem 2rem"
                fontSize="1rem"
              />
              <Field
                text="Contact Method"
                type="text"
                name="contactMethod"
                fieldType="Select"
                padding="1.2rem 2rem"
                fontSize="1rem"
                dropDown
              />
            </div>

            <Field
              text="Description"
              name="description"
              cols="30"
              rows="10"
              fieldType="TextArea"
              padding="1.2rem 2rem"
              fontSize="1rem"
            />
          </form>
        </div>
        <div>
          <h3 className="heading">Upload Images</h3>
          <br />
          <div className="upload_image_container">
            <ImageUpload />

            <ImageUpload />

            <ImageUpload />

            <ImageUpload />
          </div>

          <Button
            type="submit"
            text="Post"
            width="70%"
            margin="2.5rem 0"
            to="/editUpload"
          />
        </div>
      </div>
    </>
  );
}

export default updateMissingItem;
