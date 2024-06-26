// Copyright (c) 2018, valiantsystems and contributors
// For license information, please see license.txt

frappe.ui.form.on('White Pages', {
	refresh: function(frm) {
		frappe.dynamic_link = { doc: frm.doc, fieldname: 'name', doctype: 'White Pages' };

        frm.toggle_display(['address_html', 'contact_html'], !frm.doc.__islocal);

        if (!frm.doc.__islocal) {
            frappe.contacts.render_address_and_contact(frm);

            // custom buttons
            // frm.add_custom_button(__('Accounting Ledger'), function() {
            //  frappe.set_route('query-report', 'General Ledger',
            //      {party_type:'Member', party:frm.doc.name});
            // });

            // frm.add_custom_button(__('Accounts Receivable'), function() {
            //  frappe.set_route('query-report', 'Accounts Receivable', {member:frm.doc.name});
            // });

            // indicator
            // erpnext.utils.set_party_dashboard_indicators(frm);

        } else {
            frappe.contacts.clear_address_and_contact(frm);
        }
	}
});
