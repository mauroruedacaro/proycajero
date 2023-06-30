// var init
let passwd = '';
let stage = '';
index = 0;
countTry = 0;
mountVal = 0;
mountBalance = 0;
arrayNameCount = ['Mali','Gera','Maury'];
arrayBalanceCount = [200,290,67];
arrayPwd = ['Ene05$','Nov01$','Jul20$'];

// funtion validate password
function funCalculate (mountVal,option)
{
    
    switch (option)
    {
        case "CO":
            mountBalance = arrayBalanceCount[index] + mountVal;
            break;
        case "RE":
            mountBalance = arrayBalanceCount[index] - mountVal;
            break;
        case "SA":
            mountBalance = arrayBalanceCount [index];
            break;
        default:
            stage = "NOTOPT";
    }
    if (mountBalance > 9 && mountBalance < 990)
    {
        stage = "OK";
        arrayBalanceCount [index] = mountBalance;
    }
    else
    {
        if (stage != "NOTOPT")
        {
            stage ="INVALID";
        }
    }
    return (stage);
}

// funtion to select count
for (i=0; i<3;i++)
{
    let option = prompt (`${i+1} Cuenta de ${arrayNameCount[i]} Desea ver esta cuenta?` );
    console.log (`${i+1} Cuenta de ${arrayNameCount[i]} ` );
    if (option == 's')
    {
        index = i;
        break;
    }
    else 
    {
        if (option == 'n')
        {
            index = 3;
        }
        else
        {
            document.write ('opcion invalida');
            break;
        }
    }
}
if (index < 3) 
{
    document.write (`ESTAS EN LA CUENTA de ${arrayNameCount[index]} <br>`);
    do 
    {
        passwd = prompt (`Ingrese la contraseña`);
        countTry=countTry+1;
        if (countTry > 5)
        {
            document.write (`Maximo de intentos ${countTry}`);
            countTry = 0;
            break;
        }
    } while (passwd!=arrayPwd[index]);
}
if (countTry > 0)
{
    option = prompt ('Digite tipo transacción: (CO --> Consignar || RE --> Retirar || SA --> Saldo');
    mountVal = prompt ('Ingrese el valor');
    mountVal = parseInt (mountVal);
    funCalculate (mountVal,option); // calculate new balance  and return ak o reyected
    console.log (`Valor de stage --> ${stage}`);
    switch (stage)
    {
        case "OK":
            document.write (`Movimeinto Exitoso, nuevo saldo --> $ ${mountBalance}`);
            break;
        case "INVALID":
            document.write (`Cunenta invalida para movimientos, saldo actual -->$ ${arrayBalanceCount[index]}`);
            break;
        case "NOTOPT":
            document.write (`Opción invalidad --> ${option}`);
            break;
    }
}
