export default function ShoppingListItem({id, item, quantity, completed}) {
    const styles = {
        color: completed ? 'gray' : 'red',
        textDecoration: completed ? 'line-through' : null
    };
    return(
        <li key={id} style={styles}
        >
            {item} - {quantity}
        </li>
    );
}