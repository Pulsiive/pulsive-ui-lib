import {Color} from "../../src/utils/color";
import {StatusLabelProps} from "../../src/component/snippet/StatusLabel";

export const STATUS_ACTIVE: StatusLabelProps = {icon: {name: "circle", colorIcon: Color.GREEN}, label: "Active"};
export const STATUS_INACTIVE: StatusLabelProps = {icon: {name: "circle", colorIcon: Color.RED}, label: "Inactive"};

type DemoUser = {
    id: number;
    status: StatusLabelProps;
    firstname: string;
    lastname: string;
    age: number;
    company: string;
}

export const DEMO_USER_LIST: DemoUser[] = [
    {
        id: 1,
        status: STATUS_ACTIVE,
        firstname: 'John',
        lastname: 'Doe',
        age: 38,
        company: 'Burger King'
    },
    {
        id: 2,
        status: STATUS_ACTIVE,
        firstname: 'Steeve',
        lastname: 'Jobs',
        age: 54,
        company: 'Apple Inc.'
    },
    {
        id: 3,
        status: STATUS_INACTIVE,
        firstname: 'Mark',
        lastname: 'Zuckerberg',
        age: 46,
        company: 'Meta'
    },
    {
        id: 4,
        status: STATUS_ACTIVE,
        firstname: 'Julie',
        lastname: 'Huang',
        age: 35,
        company: 'Cleveland clinic'
    },
    {
        id: 5,
        status: STATUS_ACTIVE,
        firstname: 'Hugues',
        lastname: 'de Saint Sernin',
        age: 26,
        company: 'Sirdata'
    },
    {
        id: 6,
        status: STATUS_ACTIVE,
        firstname: 'Jessica',
        lastname: 'Alba',
        age: 38,
        company: 'The Honest Company'
    }
];
