using Microsoft.EntityFrameworkCore.Migrations;

namespace HikeFinder.Migrations
{
    public partial class FixedThatTypo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "id",
                table: "Trails",
                newName: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Trails",
                newName: "id");
        }
    }
}
