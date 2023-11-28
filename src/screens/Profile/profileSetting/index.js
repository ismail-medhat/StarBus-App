import React, { useCallback, useRef, useState } from "react";
import { View, TouchableOpacity, Image, Dimensions, Text } from "react-native";
import styles from "./styles";
import {
  AppButton,
  AppHeader,
  ScreenContainer,
  CustomBottomSheet,
  PhoneNumberInput,
  Input,
} from "components";
import {
  SVGEdit,
  SVGArFlag,
  SVGLock,
  SVGSave,
  SVGEditpic,
  SVGChange,
  SVGDownArrow,
  SVGProfile,
  SVGEye,
} from "assets/Svg";
import { translate } from "utils";
import { Colors, Fonts, Images, ScaleHeight, ScaleWidth } from "common";
import { useNavigation } from "@react-navigation/native";
import ScreenNames from "navigation/ScreenNames";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useCurrentLangSelector } from "store/slices/authSlice";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { number } from "yup";
import { launchImageLibrary } from "react-native-image-picker";

let user = {
  id: 1,
  name: "ahmed",
  email: null,
  email_verified_at: null,
  gender: "male",
  uid: "85eae9f8-2c2b-4c8d-841c-e760e3cfa4c1",
  fcm_token: "30|qJSVbGh83VBNYv2hhlgMK8aBqk6LPHcY03vVf8BGb29d40c5",
  avatar: "avatar.png",
  tel_number: "01099627470",
  address: null,
  license_url: null,
  wallet: 0,
  status_id: 1,
  password: "**********",
};

const ProfileSetting = () => {
  const lang = useCurrentLangSelector();
  const [openEditName, setOpenEditName] = useState(false);
  const [openEditMobile, setOpenEditMobile] = useState(false);
  const [openEditPass, setOpenEditPass] = useState(false);
  const [openEditImage, setOpenEditImage] = useState(false);

  const [name, setName] = useState(user.name);
  const [mobile, setMobileNumber] = useState(user.tel_number);
  const [password, setPassword] = useState(user.password);
  const [gender, setGender] = useState(user.gender);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <ScreenContainer style={styles.container}>
      <AppHeader title={translate("Setting")} />

      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <Image
            source={selectedImage ? { uri: selectedImage } : Images.profilePic}
            style={styles.profilePic}
          />

          <TouchableOpacity
            onPress={() => {
              setOpenEditImage(true);
            }}
            style={styles.editpic}
          >
            <SVGEditpic />
          </TouchableOpacity>
        </View>

        <Text style={styles.name}>{translate("Your Name")}</Text>
        <View style={styles.View}>
          <Text style={styles.nametxt}>{name}</Text>
          <TouchableOpacity
            onPress={() => {
              setOpenEditName(true);
            }}
          >
            <SVGEdit></SVGEdit>
          </TouchableOpacity>
        </View>

        <Text style={styles.gender}>{translate("Your Gender")}</Text>
        <View
          style={{
            flexDirection: "row",
            alignSelf: "stretch",
            marginBottom: ScaleHeight(15),
          }}
        >
          <View
            style={{
              flexDirection: "row-reverse",
              justifyContent: "space-between",
              marginTop: 15,
              marginRight: 20,
            }}
          >
            <Text
              style={{
                fontSize: ScaleWidth(14),
                color: gender == "male" ? Colors.primaryColor : "#333",
                paddingHorizontal: 10,
                fontFamily: Fonts.medium,
              }}
            >
              {translate("Male")}
            </Text>

            <TouchableOpacity
              onPress={() => {
                setGender("male");
              }}
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: gender == "male" ? Colors.primaryColor : "#333",
              }}
            >
              <View
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 6,
                  backgroundColor:
                    gender == "male" ? Colors.primaryColor : "#fff",
                  margin: 3,
                }}
              ></View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row-reverse",
              justifyContent: "space-between",
              marginTop: 15,
              marginRight: 20,
            }}
          >
            <Text
              style={{
                fontSize: ScaleWidth(14),
                color: gender == "female" ? Colors.primaryColor : "#333",
                paddingHorizontal: 10,
                fontFamily: Fonts.semi_bold,
              }}
            >
              {translate("Female")}
            </Text>

            <TouchableOpacity
              onPress={() => {
                setGender("female");
              }}
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: gender == "female" ? Colors.primaryColor : "#333",
              }}
            >
              <View
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 6,
                  backgroundColor:
                    gender == "female" ? Colors.primaryColor : "#fff",
                  margin: 3,
                }}
              ></View>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.mobilenumber}>{translate("Mobile Number")}</Text>
        <View style={styles.View}>
          <View style={{ flexDirection: "row" }}>
            <SVGArFlag style={{ marginRight: 10 }}></SVGArFlag>
            <Text style={styles.nametxt}>{mobile}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setOpenEditMobile(true);
            }}
          >
            <SVGEdit></SVGEdit>
          </TouchableOpacity>
        </View>

        <Text style={styles.password}>{translate("Password")}</Text>
        <View style={styles.View}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <SVGLock style={{ marginRight: 10 }}></SVGLock>
            <Text style={styles.passtxt}>
              {password ? "*".repeat(password.length) : "******"}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setOpenEditPass(true);
            }}
          >
            <SVGEdit></SVGEdit>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={{ height: 20 }} />
      <AppButton
        title={translate("Save Changes")}
        icon={<SVGSave></SVGSave>}
        onPress={() => {}}
      />

      <View style={{ height: 20 }} />

      <NameBottomSheet
        isOpen={openEditName}
        onClose={() => setOpenEditName(false)}
        onSelect={(name) => {
          setName(name);
        }}
      />

      <PhoneBottomSheet
        isOpen={openEditMobile}
        onClose={() => setOpenEditMobile(false)}
        onSelect={({ mobile }) => {
          setMobileNumber(mobile);
        }}
      />

      <PassBottomSheet
        isOpen={openEditPass}
        onClose={() => setOpenEditPass(false)}
        onSelect={({ pass }) => {
          setPassword(pass);
        }}
      />

      <ImageBottomSheet
        isOpen={openEditImage}
        onClose={() => setOpenEditImage(false)}
        onSelect={({ image }) => {
          setSelectedImage(image);
        }}
      />
    </ScreenContainer>
  );
};

export default ProfileSetting;

const NameBottomSheet = ({ onSelect, isOpen, onClose }) => {
  const [name, setName] = useState();

  return (
    <CustomBottomSheet
      isOpen={isOpen}
      onClose={onClose}
      height={ScaleHeight(270)}
    >
      <>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.changename}>Change Name</Text>
          <TouchableOpacity onPress={onClose}>
            <AntDesign
              name="close"
              size={ScaleHeight(25)}
              color={Colors.redColor}
            ></AntDesign>
          </TouchableOpacity>
        </View>

        <Input
          value={name}
          onChangeText={(text) => {
            setName(text);
          }}
          placeholderTxt={translate("Enter your name")}
          label={translate("Your Name")}
          leftIcon={<SVGProfile />}
          containerStyle={{ marginHorizontal: 0, marginTop: 10 }}
        />

        <AppButton
          title={translate("Change")}
          icon={<SVGChange />}
          onPress={() => {
            onSelect(name);
            onClose();
          }}
        />
      </>
    </CustomBottomSheet>
  );
};

const PhoneBottomSheet = ({ onSelect, isOpen, onClose }) => {
  const [phone, setPhone] = useState();

  return (
    <CustomBottomSheet
      isOpen={isOpen}
      onClose={onClose}
      height={ScaleHeight(270)}
    >
      <>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.changename}>Change Mobile Number</Text>
          <TouchableOpacity onPress={onClose}>
            <AntDesign
              name="close"
              size={25}
              color={Colors.redColor}
            ></AntDesign>
          </TouchableOpacity>
        </View>

        <Text style={styles.editname}>Your Number</Text>

        <View style={styles.inputContainer}>
          <SVGArFlag />
          <View style={{ width: 8 }} />
          <Text style={styles.codeText}>+20</Text>
          <SVGDownArrow />
          <TouchableOpacity style={styles.inputBox}>
            <TextInput
              style={styles.input}
              placeholderTextColor={"#787878"}
              placeholder={translate("Enter your number")}
              value={phone}
              keyboardType="phone-pad"
              onChangeText={(val) => {
                setPhone(val);
              }}
            />
          </TouchableOpacity>
        </View>

        <AppButton
          title={translate("Change")}
          icon={<SVGChange />}
          onPress={() => {
            onSelect({ mobile: phone });
            onClose();
          }}
        />
      </>
    </CustomBottomSheet>
  );
};

const PassBottomSheet = ({ onSelect, isOpen, onClose }) => {
  const [pass, setPass] = useState();
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const onEyeIconPressed = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <CustomBottomSheet
      isOpen={isOpen}
      onClose={onClose}
      height={ScaleHeight(270)}
    >
      <>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.changename}>Change Password</Text>
          <TouchableOpacity onPress={onClose}>
            <AntDesign
              name="close"
              size={25}
              color={Colors.redColor}
            ></AntDesign>
          </TouchableOpacity>
        </View>

        <Input
          value={pass}
          onChangeText={(val) => {
            setPass(val);
          }}
          placeholderTxt={translate("Enter your password")}
          label={translate("Password")}
          leftIcon={<SVGLock />}
          rightIcon={<SVGEye />}
          secureTextEntry={secureTextEntry}
          onRightIconPress={onEyeIconPressed}
          containerStyle={{ marginHorizontal: 0, marginTop: 10 }}
        />

        <AppButton
          title={translate("Change")}
          icon={<SVGChange />}
          onPress={() => {
            onSelect({ pass });
            onClose();
          }}
        />
      </>
    </CustomBottomSheet>
  );
};

const ImageBottomSheet = ({ onSelect, isOpen, onClose }) => {
  const [image, setImage] = useState();

  const onImageGalleryClick = useCallback(() => {
    const options = {
      selectionLimit: 1,
      mediaType: "photo",
      includeBase64: false,
      selectionLimit: 1,
    };

    launchImageLibrary(options, (res) => {
      if (res.didCancel) {
        console.log("User cancelled");
      } else if (res.errorCode) {
        console.log("ImagePickerError: ", res.errorMessage);
      } else {
        onSelect({ image: res.assets[0].uri });
      }
    });
  }, []);

  return (
    <CustomBottomSheet
      isOpen={isOpen}
      onClose={onClose}
      height={ScaleHeight(220) + 10}
      children={
        <>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={[styles.changename, { marginBottom: 10 }]}>
              Change Image
            </Text>
            <TouchableOpacity onPress={onClose}>
              <AntDesign
                name="close"
                size={25}
                color={Colors.redColor}
              ></AntDesign>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={onImageGalleryClick}
            style={{
              height: ScaleHeight(51),
              paddingHorizontal: 10,
              borderRadius: 10,
              justifyContent: "center",
              marginVertical: 10,
              backgroundColor: "#f5f5f5",
            }}
          >
            <Text style={[styles.editname, { marginTop: 0 }]}>
              {translate("select image")}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              onClose();
              setTimeout(() => {
                onSelect({ image: undefined });
              }, 200);
            }}
            style={{
              height: ScaleHeight(51),
              paddingHorizontal: 10,
              borderRadius: 10,
              justifyContent: "center",
              marginVertical: 10,
              backgroundColor: "#f5f5f5",
            }}
          >
            <Text style={[styles.editname, { marginTop: 0 }]}>
              {translate("delete image")}
            </Text>
          </TouchableOpacity>
        </>
      }
    ></CustomBottomSheet>
  );
};
