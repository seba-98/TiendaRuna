import React from 'react'

const Buy = () => {
    return (
        <div className='infoTextContent'>
            <div className='infoText'>
                <h3>¡Bienvenidos/as a Runa!</h3>
                <p>En esta sección te explicamos como comprar a travez de la tienda online</p>
            </div>
            <div className='infoText'>
                <h3>1- Debes elegir los productos</h3>
                <p>Dirijete a las categorias en el inicio de la página, allí podrás navegar por las distintas categorias de productos. </p>
                <p>Dentro de una categoria o en la sección de todos los productos, puedes ingresar a cada producto  y alli puedes</p>
                <p>seleccionar la cantidad que deseas añadir al carrito </p>
            </div>
            <div className='infoText'>
                <h3>2- Carrito</h3>
                <p>Una vez elegidos todos tus productos puedes ir al carrito de compras situado en la barra de navegación. </p>
                <p>Allí puedes agregar mas productos, quitar cantidad o si te arrepientes de la compra vaciar tu carro.</p>
                <p>El siguiente paso es darle al botón de 'REALIZAR COMPRA' para ver el formulario de compra </p>
            </div>
            <div className='infoText'>
                <h3>3- Formulario de compra</h3>
                <p>En esta sección debes rellenar tus datos personales para poder enviarte los productos, es importante que los datos </p>
                <p>sean correctos para evitar cualquier inconveniente con el envio.</p>
                <p>Al registrar la compra veras una ventana de confirmación con tus datos y los datos de tu compra, comprueba que todos</p>
                <p>los datos sean correctos y presiona en 'FINALIZAR' para enviar la compra</p>
            </div>
            <div className='infoText'>
                <h3>4- Pago del producto</h3>
                <p>Ya enviada la compra nos contactaremos con usted por medio de email y whatsapp para enviarle los datos de pago y precio</p>
                <p> del envío, para realizar el pago las opciones son transferencia bancaria o mercado pago</p>
            </div>
        </div>
    )
}

export default Buy
