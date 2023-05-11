sap.ui.define(
    [],
  
    function () {
      "use strict";
  
      return {
        getGender: function (isMale, isFemale) {
          if (isMale) return "Male";
          if (isFemale) return "Female";

          return "Not specified";
        },
  
      };
    }
  );
  