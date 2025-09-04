export const Constant = {
    UserList: "User List",
    AccountList: "Account List",
    Save: "Save",
    Back: "Back",
    AddUser: "Add User",
    LeverageName:"Leverage Name",
    LeverageValue: "Leverage Value",
    LeverageType: "Leverage Type",
}

export const sidebarOptions = [
    {
      title: "User Management",
      children: [
        { name: "User", link: "/" },
        { name: "Trading Account", link: "/trading-account" },
      ],
    },
    {
      title: "Trading A/C Management",
      children: ["Brokerage Plan", "Account Setup", "A/C Mapping"],
    },
    {
      title: "Admins Management",
      children: ["Create Admin", "Manage Roles"],
    },
    {
      title: "Instrument Management",
      children: ["Add Instrument", "Import CSV", "Instrument Settings"],
    },
    {
      title: "Rule Engine Management",
      children: ["Create Rule", "Manage Rules"],
    },
    {
      title: "Setting Property Management",
      children: ["Preferences", "Themes", "Notifications"],
    },
    {
      title: "Admin Page Management",
      children: ["Manage Pages", "Access Logs"],
    },
    {
      title: "Query Page",
      children: ["Run Query", "Saved Queries"],
    },
    {
      title: "History Management",
      children: ["User History", "Audit Logs"],
    },
    {
      title: "Server Management",
      children: ["Server Status", "Restart Server"],
    },
    {
      title: "Reports Management",
      children: ["Daily Reports", "Monthly Reports"],
    },
    {
      title: "CRM",
      children: ["Customer List", "Lead Tracking"],
    },
  ];

  export const Routing ={
    home: "/",
    userDetail: "/user-detail",
    tradingAccount:"/trading-account",
    tradingAccountDetail:"/trading-account-detail"
  }