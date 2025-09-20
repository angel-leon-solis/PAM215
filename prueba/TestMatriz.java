import java.util.Arrays;
class TestMatriz{
    public static void imprimir(int [][]m){
        System.out.println("Imprimiendo la matriz por elementos: ");
        for(int i = 0; i < m.length; i++){
            for(int j = 0; j < m[i].length; j++){
                System.out.print(m[i][j] + " ");
            }
            System.out.println();
        }
    }
    public static int sumarDiagonal(int [][]m){
        int total=0;
        for(int i=0; i<m.length; i++){
            
            total += m[i][i];
        }
        return total;
    }
    public static int sumar(int [][]m){
        int total=0;
        for(int i=0; i<m.length; i++){
            for(int j=0; j<m[i].length; j++){
                 total += m[i][j];
            }
           
        }
        return total;
         }

         public static int [] obtenerFIla(int f, int [][]m){
            int[] res= new int[m[f].length];

            for(int i=0; i<m[f].length; i++){
                res[i]= m[f][i];
            }
            return res;
         }
    public static void main(String[] args){
        int matriz[][] = {
            {1,2,3,4},
            {5,6,7,8},
            {9,10,11,12}
        };
        imprimir(matriz);
        System.out.println(sumarDiagonal(matriz));
        System.out.println(sumar(matriz));
        System.out.println(Arrays.toString (obtenerFIla(1,matriz)));
    }
}
