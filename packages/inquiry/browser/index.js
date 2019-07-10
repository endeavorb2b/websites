import RMIForm from './rmi-form.vue';

export default (Browser, { component, mountPoint } = {}) => {
  const InquiryForm = component || RMIForm;
  Browser.registerComponent('InquiryForm', InquiryForm, { mountPoint });
};
