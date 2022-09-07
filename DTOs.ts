interface CommonDTO {
    mainTitle: string,
    navLabels: {
        projects: string,
        team: string,
        shop: string,
        order: string,
    },
    email: string,
    phone: string,
    footerTitle: string,
    companyName: string,
    linkPolicy: string,
    social: Array<{
        title: string,
        link: string,
        icon: string,
    }>,
    map: {
        title: string,
        longitude: string,
        latitude: string,
    }
}

interface HomeDTO {
    runningLine: Array<string>,
    promoSubtitle: string,
    promoHints: string,
    clients: Array<{
        icon: string,
        label: string,
    }>,
    titleProject: string,
    projects: Array<object>,
    awards: Array<{
        name: string,
        photo: string,
        project: string,
    }>,
    common: CommonDTO
}

interface TeamDTO {
    titleTeam: string,
    employees: EmployeesDTO,
    subtitleProject: string,
    projects: Array<ProjectsDTO>,
    common: CommonDTO,
}

interface OrderDTO {
    selectors: {
        firstSelector: {
            title: string,
            options: Array<string>
        },
        secondSelector: {
            title: string,
            options: Array<string>
        },
        thirdSelector: {
            title: string,
            options: Array<string>
        }
    },
    common: CommonDTO
}

interface ProjectsDTO {

}

interface EmployeeDTO {

}

interface ProjectsDTO {

}

interface EmployeesDTO {

}
