import {Regex} from "./interface";

export default class implements Regex {
    email= /^(([^<>()\[\]\\.,;=\s@"]+(\.[^<>()\[\]\\.,;=\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    phone= /.*/;
    cellphone= /.*/;
    postalCode= /^([0-9]{5}[\d]{3})$/;
    password= /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%!\-_?&])(?=\S+$).{8,}/;
    cpf=/.*/;
}