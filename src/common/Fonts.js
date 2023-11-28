import {store} from 'store';

const {appLang} = store.getState().auth;
const Fonts = {
  bold: appLang == 'en' ? 'Poppins-Bold' : 'Cairo-Bold',
  semi_bold: appLang == 'en' ? 'Poppins-SemiBold' : 'Cairo-SemiBold',
  medium: appLang == 'en' ? 'Poppins-Medium' : 'Cairo-Medium',
  regular: appLang == 'en' ? 'Poppins-Regular' : 'Cairo-Regular',
  light: appLang == 'en' ? 'Poppins-Light' : 'Cairo-Light',
  extra_light: appLang == 'en' ? 'Poppins-ExtraLight' : 'Cairo-ExtraLight',
};

export default Fonts;
