import Alpine from 'alpinejs';
import mask from '@alpinejs/mask'

Alpine.plugin(mask);

Alpine.data('ccform', () => ({
    success: false,

    formData: {
        name: '',
        cardNumber: '',
        expiryMonth: '',
        expiryYear: '',
        cvc: '',
    },

    validation: {
        checked: false,
        errorRequired: "Can't be blank",
        year: 2022
    },

    styles: {
        input: 'border rounded-lg p-3 w-full focus:border-violet-100 focus:outline-none',
        label: 'block text-xs text-violet-50 tracking-widest mb-2',
        button: 'my-7 bg-neutral-50 rounded-lg w-full p-4 text-white hover:bg-gradient-to-r hover:from-violet-100 hover:to-violet-200',
        error: 'text-xs text-red normal-case mt-2'
    },

    validateFields() {
        const currentTime = new Date();
        const year = currentTime.getFullYear();
        this.validation.year = year;

        if (!this.formData.name 
            || this.formData.cardNumber.length < 19 
            || !this.formData.expiryMonth || parseInt(this.formData.expiryMonth) > 12
            || !this.formData.expiryYear || parseInt(`20${this.formData.expiryYear}`) < year 
            || this.formData.cvc < 3) {
            this.validation.checked = true;
            return false;
        }

        return true;
    },

    submitForm(form) {
        console.log(this.validateFields());
        if (this.validateFields()) {
            this.success = true;
        }
    }
}));

window.Alpine = Alpine
Alpine.start()

