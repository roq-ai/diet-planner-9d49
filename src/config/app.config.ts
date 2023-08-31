interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Dietician'],
  tenantName: 'Organization',
  applicationName: 'Diet Planner',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage Organization registration',
    'Manage Organization login',
    'Invite Dieticians to Organization',
    'Remove Dieticians from Organization',
    'View all diet plans created in Organization',
  ],
};
