const cds = require('@sap/cds')
/**
 * Implementation for Risk Management service defined in ./risk-service.cds
 */
module.exports =  class AdminService extends cds.ApplicationService{
    async init(){
        this.after('READ', 'Risks', risksData => {
            const risks = Array.isArray(risksData) ? risksData : [risksData];
            risks.forEach(risk => {
                if (risk.impact >= 100000) {
                    risk.criticality = 1;
                } else {
                    risk.criticality = 2;
                }
            });
        });
        return super.init()
    }
}


// start > processing > midle > end
