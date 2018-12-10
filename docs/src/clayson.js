
var clayson_alert = `
<p><span id="add_alert" style="padding: 20px; cursor: pointer;"> <i class="fa fa-calendar-plus-o"></i>
Lägg till påminnelse</span></p>`

var clayson_journal = `
<p><strong>Stambok:</strong>AsVh <strong>Reg nr:</strong> 04141016<strong> Chip nr:</strong>
752098100561680 </p>
<p><strong>Född:</strong> 2014 <strong>Kön:</strong> valack</p>
<p><strong>Härstamning:</strong> U. Claire 		E. Cinsey</p>
<p><strong>Uppfödare:</strong> Marie Samuelsson</p>
<p><strong>Ägare:</strong> Sofia Bengtsberg</p>
<p><strong>Temp:</strong> 37,5 <strong>Vikt:</strong> 530 kg <strong>Mankhöjd:</strong> 166cm</p>
<p><strong>Box:</strong> 6 <strong>Hage:</strong> 1</p>`

var clayson_foderstat = `
<h3>Morgon</h3>
<p> 2 kg hö	1/2 skopa Krafft mussli	1 dl mineraler</p>
<h3>Lunch</h3>
<p> 2 kg hö		½ skopa krafft mussli, 0,5 slobber</p>
<h3>Eftermiddag</h3>
<p> 2 kg hö		1/2 skopa kraft mussli</p>
<h3>Kväll</h3>
<p> 4 kg hö</p>`;

var clayson_gear = `<p>Antares träns med ergonomiskt nackstycke, trustbett eller eggbett bett, Antares sadel, fårskinnspadd, alltid skydd fram, förbygel med martingal vid hoppning.</p>`;

var clayson_hov_hist = `
<table>
        <tr>
            <th>Datum</th>
            <th>Kommentar</th>
        </tr>
        <tr>
            <td>15/9 </td>
            <td>Normal skoning med sulor fram. <strong>(skickad till ekonomisk rapport/kostnad)</strong></td>
        </tr>
        <tr>
            <td>16/10</td>
            <td> Normal skoning med sulor fram. <strong>(skickad till ekonomisk rapport/kostnad)</strong></td>
        </tr>
        <tr>
            <td>30/11</td>
            <td> </td>
        </tr>
    </table>
`
var clayson_vet_hist = `
<table>
<tr>
    <th>Datum</th>
    <th>Kommentar</th>
</tr>
<tr>
    <td>9/7</td>
    <td>Hos axel i hölö.,  Ej halt men något ojämn bak. Böjde runt om och ingen reaktion, något ojämn bak på volt. Axel tycker inte heller att han var så sned.
    Röntgade ryggen då han ämnade något men det var fint, ultraljudade s1 leden samt bakknän, såg bra ut. Kotan mellan länd-kors är sammanväxt men det kan de vara enligt axel och kommer garanterat inte att störa honom men det kan göra att de blir lite tröttare i ryggen framför för att rörelserna tar lite stopp där. Blistrad båda bak och ländrygg vänster sida.
    Karens 14 dagar. Longeras/tömkörning 1 vecka <br/> Ridas lättare 1 vecka<br/> <strong>(skickad till ekonomisk rapport/kostnad)</strong>
     </td>
</tr>
</table>`

var clayson_beh_hist = `
<table>
        <tr>
            <th>Datum</th>
            <th>Kommentar</th>
        </tr>
        <tr>
            <td>11/6</td>
            <td> Var hos Camilla idag, han började med att slänga sig i stallgången, öm i hela vänster sidan från rygg-länd. Öm på ryggraden och även hela muskulaturen. Kort från sista revbenet till höftknölen i vänster sidan. När jag gick med honom så sänker han höger kors, när vi longerade så var han halt vänster fram i högervarv och höger bak i vänster varv. Båda Camilla och Sandra kollade på honom. <strong>(skickad till ekonomisk rapport/kostnad)</strong>
            </td>
        </tr>
        <tr>
            <td>7/7 </td>
            <td> Camilla kände igenom, överlag bra. Nacke v sida ngt bättre än tidigare. Fortfarande något
                sVar hos Camilla idag, bättre i vänster sidan av ryggen och även mellan revben till höftknöl men är fortfarande kortare där, högre på höger sida länd och kors. Camilla tycker att han var bättre när hon höjde upp hans bakben också. Halsen bättre.
                Hon tycker att han ska kollas om 1 månad igen och ev behandla med blister bakknän om 6 veckor. <span class="warning">(Påminnelse tillagd)</span></td>
        </tr>
        <td>28/9 </td>
        <td> Var hos Camilla idag, hon tyckte de va stor skillnad på honom han ser betydligt mer välmusklad ut och fin i kroppen. Ser och känns betydligt rakare och lättare rörelse i ryggen. Hon tror behandlingen av bakknäna har gjort gott, och kan nog va bra att hålla efter emellanåt. Fortfarande lite spänd baksida lår och höger sida rumpan ska hållas efter med massage 2ggr i veckan och ev speedway på bakknäna emellanåt. Även v. skulderbladet ska masseras 2ggr i veckan då han var lite spänd där. Har fått akupunktur vänster sida skulderblad o hals och sen laser på manke, rygg o ländrygg. Ska också hållas efter laser bakknän.</td>
    </tr>
    </table>`

var clayson_med_hist = `
<table>
        <tr>
            <th>Datum</th>
            <th>Kommentar</th>
        </tr>
        <tr>
            <td>16/11 </td>
            <td> Vaccination</td>
        </tr>
        <tr>
            <td>28/11</td>
            <td> Påminnelse om att vaccination bör ske senast detta datum, påmin ca 1 månad + 2 veckor innan.  <span class="warning">(Påminnelse tillagd)</span> </td>
        </tr>
        <tr>
            <td>15/4</td>
            <td>Avmaskning Ivomectin</td>
        </tr>
    </table>
`

var clayson_train_hist = `<table id="training_table">
<tr>
    <th>Datum</th>
    <th>Typ</th>
    <th>Kommentar</th>
    <th>Träningsfilmer</th>
</tr>
<tr>
    <td>12/11</td>
    <td>Vattenband</td>
    <td>Arbetade fint  <strong>(skickad till ekonomisk rapport/kostnad)</strong></td>
    <td>
        <ul>
            <li><a href="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Horse-and-pony.jpg/1920px-Horse-and-pony.jpg">Cindy_träning_12/11_1</a></li>
            <li><a href="https://upload.wikimedia.org/wikipedia/commons/3/3b/Foal-three-hours-old.jpeg">Cindy_träning_12/11_2</a></li>
            </li>
        </ul>
    </td>
</tr>
<tr>
    <td>13/11</td>
    <td>Hoppträning för Svante.</td>
    <td>Ghassan red. Arbetade med galopp byten och rakriktning. Arbetade bra.</td>
    <td>

    </td>
</tr>
<tr>
    <td>14/11</td>
    <td>Skrittmaskinen</td>
    <td></td>
    <td>
        <ul>
            <li><a href="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Horse-and-pony.jpg/1920px-Horse-and-pony.jpg">Cindy_träning_14/11</a></li>
        </ul>
    </td>
</tr>
<tr>
    <td>15/11 </td>
    <td>Markarbete</td>
    <td> Arbetade bra, liksidig</td>
    <td>

    </td>
</tr>
</table>`

var clayson_doc = `
<ul>
        <li><a href="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Horse-and-pony.jpg/1920px-Horse-and-pony.jpg">Cindy_träning_08/12</a></li>
        <li><a href="https://upload.wikimedia.org/wikipedia/commons/3/3b/Foal-three-hours-old.jpeg">Cindy_träning_07/14</a></li>
        </li>
        <li><a href="https://google.com">Journal_Clayson.pdf</a></li>
</ul>
`

var clayson_rap = `
<table>
    <tr>
        <th>Datum</th>
        <th>Info</th>
        <th>Kostnad</th>
        <th>Dokument</th>
    </tr>
    <td>12/12</td>
    <td>Normal skoning med sulor fram</td>
    <td>1875:-</td>
    <td><a href="https://google.com">Ladda ner PDF</a></td>
    <tr>
    </tr>
    <td>13/12</td>
    <td>Normal skoning med sulor fram</td>
    <td>1875:-</td>
    <td><a href="https://google.com">Ladda ner PDF</a></td>
    </tr>
    <tr>
    </tr>
    <td>15/12</td>
    <td>Avmaskning Ivomectin</td>
    <td>1875:-</td>
    <td><a href="https://google.com">Ladda ner PDF</a></td>
    </tr>
    <tr>
    </tr>
    <td>18/12</td>
    <td>Normal skoning med sulor fram</td>
    <td>1875:-</td>
    <td><a href="https://google.com">Ladda ner PDF</a></td>
    </tr>
    <tr>
    </tr>
    <td>24/12</td>
    <td>Vaccination</td>
    <td>1875:-</td>
    <td><a href="https://google.com">Ladda ner PDF</a></td>
    </tr>
</table>
`



